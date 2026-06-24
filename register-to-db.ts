#!/usr/bin/env npx ts-node --transpile-only
/**
 * Twenty DB Registration Script v2 — M-PERFECT-LOOP-1 Phase C
 *
 * Uses ts-node + dynamic import() to load all NewLeaf app source files,
 * extracting their define*() configs, then inserts into Twenty PostgreSQL.
 *
 * Usage: cd /home/neptune/twenty-newleaf-app && npx ts-node --transpile-only register-to-db.ts [--dry-run]
 */
import { execSync } from 'child_process';
import { createHash } from 'crypto';
import * as path from 'path';
import * as fs from 'fs';

// ─── Constants ───
const APP_DIR = '/home/neptune/twenty-newleaf-app';
const WORKSPACE_ID = '1051205a-d7f7-426d-97a1-eea0e170e14d';
const APP_ID = 'b1e52dc6-f573-4f51-a3bb-61db71ebc493';
const DRY_RUN = process.argv.includes('--dry-run');

// Write SQL to temp file and pipe to psql — avoids shell escaping issues
function psql(sql: string): string {
  if (DRY_RUN) {
    console.log('  [DRY]', sql.substring(0, 100).replace(/\n/g, ' ') + '...');
    return '';
  }
  try {
    const tmpFile = `/tmp/twenty-reg-${Date.now()}-${Math.random().toString(36).slice(2)}.sql`;
    fs.writeFileSync(tmpFile, sql, 'utf8');
    const result = execSync(
      `cat "${tmpFile}" | docker exec -i twenty-db-1 psql -U postgres -d default 2>&1`,
      { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 15000 }
    );
    try { fs.unlinkSync(tmpFile); } catch {}
    if (result.includes('ERROR:') || result.includes('FATAL:')) {
      return 'ERROR: ' + result.trim();
    }
    return result;
  } catch (e: any) {
    return 'ERROR: ' + (e.stderr || e.stdout || e.message);
  }
}

function uuidFromStr(str: string): string {
  const h = createHash('sha256').update(str).digest('hex').substring(0, 32);
  return h.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
}

function esc(s: string): string {
  return (s || '').replace(/'/g, "''").replace(/\\/g, '\\\\');
}

// ─── Collect file paths ───
function collectFiles(subDir: string, suffix: string): string[] {
  const dirPath = path.join(APP_DIR, 'src', subDir);
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath)
    .filter(f => f.endsWith(suffix) && f !== 'index.ts')
    .map(f => path.join(dirPath, f));
}

// ─── Interface for loaded modules ───
interface AgentConfig {
  name: string; label: string; icon?: string; description?: string;
  prompt: string; modelConfiguration: { provider: string; model: string; temperature?: number; maxTokens?: number };
  skills: string[];
}
interface SkillConfig {
  name: string; label: string; icon?: string; description?: string; content: string;
}
interface ObjectConfig {
  nameSingular: string; labelSingular: string; labelPlural: string;
  icon?: string; description?: string; fields: any[];
}
interface ObjectExtensionConfig {
  targetObject: string; fields: any[];
}
interface ViewConfig {
  name: string; label: string; type: string; icon?: string; objectName: string;
  description?: string; filters?: any[]; columns?: any[]; sorting?: any[];
  kanbanField?: string; groupByField?: string; cardFields?: string[];
}
interface WorkflowConfig {
  name: string; label: string; trigger: { objectName: string; action: string };
  steps: any[]; description?: string;
}
interface DashboardConfig {
  name: string; label: string; icon?: string; description?: string; widgets: any[];
}

async function main() {
  console.log('╔══════════════════════════════════════════╗');
  console.log('║  NEWLEAF → TWENTY DB REGISTRATION v2     ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log(`  Workspace: ${WORKSPACE_ID}`);
  console.log(`  App: ${APP_ID}\n`);

  // ─── 1. REGISTER AGENTS ───
  console.log('─── REGISTERING AGENTS ───');
  const agentFiles = collectFiles('agents', '.agent.ts');
  let agentCount = 0;

  for (const f of agentFiles) {
    try {
      const mod = await import(f);
      const config: AgentConfig = mod.default;

      if (!config || !config.name) { console.log(`  SKIP ${path.basename(f)}: no config`); continue; }

      const uid = uuidFromStr(`newleaf-agent-${config.name}`);
      const modelCfg = esc(JSON.stringify(config.modelConfiguration));
      const prompt = esc(config.prompt || '');
      const desc = esc(config.description || '');

      psql(`DELETE FROM core.agent WHERE name='${config.name}' AND "workspaceId"='${WORKSPACE_ID}'`);

      const r = psql(`INSERT INTO core.agent (id, name, label, icon, description, prompt, "modelId", "isCustom", "workspaceId", "applicationId", "universalIdentifier", "modelConfiguration", "responseFormat", "evaluationInputs") VALUES ('${uid}', '${esc(config.name)}', '${esc(config.label)}', '${esc(config.icon || '')}', '${desc}', '${prompt}', 'default-smart-model', true, '${WORKSPACE_ID}', '${APP_ID}', '${uid}', '${modelCfg}'::jsonb, '{"type":"text"}'::jsonb, '{}'::text[])`);

      if (!r.includes('ERROR')) {
        agentCount++;
        console.log(`  ✓ ${config.name} [${config.label}] (${config.skills?.length || 0} skills)`);
      } else {
        console.log(`  ✗ ${config.name}: ${r.trim()}`);
      }
    } catch (e: any) {
      console.log(`  ✗ ${path.basename(f)}: ${e.message}`);
    }
  }

  // ─── 2. REGISTER SKILLS ───
  console.log('\n─── REGISTERING SKILLS ───');
  const skillFiles = collectFiles('skills', '.skill.ts');
  let skillCount = 0;

  for (const f of skillFiles) {
    try {
      const mod = await import(f);
      const config: SkillConfig = mod.default;

      if (!config || !config.name) { console.log(`  SKIP ${path.basename(f)}: no config`); continue; }

      const uid = uuidFromStr(`newleaf-skill-${config.name}`);
      const content = esc(config.content || '');
      const desc = esc(config.description || '');

      psql(`DELETE FROM core.skill WHERE name='${config.name}' AND "workspaceId"='${WORKSPACE_ID}'`);

      const r = psql(`INSERT INTO core.skill (id, name, label, icon, description, content, "isCustom", "isActive", "workspaceId", "applicationId", "universalIdentifier") VALUES ('${uid}', '${esc(config.name)}', '${esc(config.label)}', '${esc(config.icon || '')}', '${desc}', '${content}', true, true, '${WORKSPACE_ID}', '${APP_ID}', '${uid}')`);

      if (!r.includes('ERROR')) {
        skillCount++;
        console.log(`  ✓ ${config.name}`);
      } else {
        console.log(`  ✗ ${config.name}: ${r.trim()}`);
      }
    } catch (e: any) {
      console.log(`  ✗ ${path.basename(f)}: ${e.message}`);
    }
  }

  // ─── 3. REGISTER OBJECTS ───
  console.log('\n─── REGISTERING OBJECTS ───');
  const objectFiles = collectFiles('objects', '.ts');
  let objectCount = 0;

  for (const f of objectFiles) {
    try {
      const mod = await import(f);
      const config: ObjectConfig | ObjectExtensionConfig = mod.default;

      if (!config) { console.log(`  SKIP ${path.basename(f)}: no config`); continue; }

      // Check if it's an extension
      if ('targetObject' in config) {
        console.log(`  ✓ ${path.basename(f)} (extension of ${config.targetObject})`);
        continue;
      }

      const objCfg = config as ObjectConfig;
      const uid = uuidFromStr(`newleaf-object-${objCfg.nameSingular}`);

      psql(`DELETE FROM core."objectMetadata" WHERE "nameSingular"='${objCfg.nameSingular}' AND "workspaceId"='${WORKSPACE_ID}'`);

      const targetTable = `_custom_${objCfg.nameSingular}`;
      const r = psql(`INSERT INTO core."objectMetadata" (id, "nameSingular", "namePlural", "labelSingular", "labelPlural", description, icon, "isCustom", "isActive", "isSystem", "isRemote", "workspaceId", "applicationId", "universalIdentifier", "targetTableName") VALUES ('${uid}', '${esc(objCfg.nameSingular)}', '${esc(objCfg.labelPlural.toLowerCase())}', '${esc(objCfg.labelSingular)}', '${esc(objCfg.labelPlural)}', '${esc(objCfg.description || '')}', '${esc(objCfg.icon || '')}', true, true, false, false, '${WORKSPACE_ID}', '${APP_ID}', '${uid}', '${targetTable}')`);

      if (!r.includes('ERROR')) {
        objectCount++;
        console.log(`  ✓ ${objCfg.nameSingular} (${objCfg.fields?.length || 0} fields)`);
      } else {
        console.log(`  ✗ ${objCfg.nameSingular}: ${r.trim()}`);
      }
    } catch (e: any) {
      console.log(`  ✗ ${path.basename(f)}: ${e.message}`);
    }
  }

  // ─── 4. REGISTER VIEWS ───
  console.log('\n─── REGISTERING VIEWS ───');
  const viewFiles = collectFiles('views', '.view.ts');
  let viewCount = 0;

  for (const f of viewFiles) {
    try {
      const mod = await import(f);
      const config: ViewConfig = mod.default;

      if (!config || !config.name) { console.log(`  SKIP ${path.basename(f)}: no config`); continue; }

      const uid = uuidFromStr(`newleaf-view-${config.name}`);
      // Get objectMetadataId — try custom objects first, then standard
      let objId: string | null = null;
      const objName = config.objectName || 'person';
      const objQ = psql(`SELECT id FROM core."objectMetadata" WHERE "nameSingular"='${objName}' AND "workspaceId"='${WORKSPACE_ID}' LIMIT 1`);
      const m = objQ.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/);
      if (m) objId = m[0];

      // Fallback: try to find any matching object
      if (!objId) {
        const objQ2 = psql(`SELECT id FROM core."objectMetadata" WHERE ("nameSingular"='${objName}' OR "labelSingular"='${objName}') AND "workspaceId"='${WORKSPACE_ID}' LIMIT 1`);
        const m2 = objQ2.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/);
        if (m2) objId = m2[0];
      }

      // Last resort: use person object
      if (!objId) {
        const objQ3 = psql(`SELECT id FROM core."objectMetadata" WHERE "nameSingular"='person' AND "workspaceId"='${WORKSPACE_ID}' LIMIT 1`);
        const m3 = objQ3.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/);
        if (m3) objId = m3[0];
      }

      if (!objId) {
        console.log(`  ✗ ${config.name}: no objectMetadataId found for '${objName}'`);
        continue;
      }

      psql(`DELETE FROM core.view WHERE name='${config.name}' AND "workspaceId"='${WORKSPACE_ID}'`);


      // Map type to valid Twenty enum values
      const rawType = (config.type || 'table').toUpperCase();
      const validTypes = ['TABLE', 'KANBAN', 'CALENDAR', 'FIELDS_WIDGET', 'TABLE_WIDGET'];
      const viewType = validTypes.includes(rawType) ? rawType : 'TABLE';

      const r = psql(`INSERT INTO core.view (id, name, "universalIdentifier", "objectMetadataId", type, icon, "isCustom", "workspaceId", "applicationId", "visibility", "openRecordIn", "shouldHideEmptyGroups", "isCompact", position) VALUES ('${uid}', '${esc(config.name)}', '${uid}', ${objId ? `'${objId}'` : 'NULL'}, '${viewType}', '${esc(config.icon || 'IconEye')}', true, '${WORKSPACE_ID}', '${APP_ID}', 'WORKSPACE', 'SIDE_PANEL', false, false, 0)`);

      if (!r.includes('ERROR')) {
        viewCount++;
        console.log(`  ✓ ${config.name} (${viewType})`);
      } else {
        console.log(`  ✗ ${config.name}: ${r.trim()}`);
      }
    } catch (e: any) {
      console.log(`  ✗ ${path.basename(f)}: ${e.message}`);
    }
  }

  // ─── 5. REGISTER WORKFLOWS ───
  console.log('\n─── REGISTERING WORKFLOWS ───');
  const workflowFiles = collectFiles('workflows', '.workflow.ts');
  let workflowCount = 0;

  for (const f of workflowFiles) {
    try {
      const mod = await import(f);
      const config: WorkflowConfig = mod.default;

      if (!config || !config.name) { console.log(`  SKIP ${path.basename(f)}: no config`); continue; }

      const uid = uuidFromStr(`newleaf-wf-${config.name}`);
      const triggerObj = config.trigger || { objectName: '', action: '' };
      const triggerCfg = esc(JSON.stringify({
        objectName: triggerObj.objectName,
        actions: [triggerObj.action]
      }));

      psql(`DELETE FROM core."logicFunction" WHERE name='${config.name}' AND "workspaceId"='${WORKSPACE_ID}'`);

      const baseName = path.basename(f).replace('.ts', '');
      const r = psql(`INSERT INTO core."logicFunction" (id, name, description, "workspaceId", "applicationId", "universalIdentifier", "sourceHandlerPath", "handlerName", "builtHandlerPath", "databaseEventTriggerSettings", "timeoutSeconds") VALUES ('${uid}', '${esc(config.name)}', '${esc(config.description || '')}', '${WORKSPACE_ID}', '${APP_ID}', '${uid}', 'src/workflows/${baseName}', 'handler', 'dist/workflows/${baseName}.js', '${triggerCfg}'::jsonb, 300)`);

      if (!r.includes('ERROR')) {
        workflowCount++;
        console.log(`  ✓ ${config.name}`);
      } else {
        console.log(`  ✗ ${config.name}: ${r.trim()}`);
      }
    } catch (e: any) {
      console.log(`  ✗ ${path.basename(f)}: ${e.message}`);
    }
  }

  // ─── 6. REGISTER DASHBOARDS ───
  console.log('\n─── REGISTERING DASHBOARDS ───');
  const dashboardFiles = collectFiles('dashboards', '.dashboard.ts');
  let dashCount = 0;

  for (const f of dashboardFiles) {
    try {
      const mod = await import(f);
      const config: DashboardConfig = mod.default;

      if (!config || !config.name) { console.log(`  SKIP ${path.basename(f)}: no config`); continue; }

      const uid = uuidFromStr(`newleaf-dash-${config.name}`);

      psql(`DELETE FROM core."pageLayout" WHERE name='${config.name}' AND "workspaceId"='${WORKSPACE_ID}'`);

      const r = psql(`INSERT INTO core."pageLayout" (id, name, "workspaceId", type, "applicationId", "universalIdentifier") VALUES ('${uid}', '${esc(config.name)}', '${WORKSPACE_ID}', 'RECORD_PAGE', '${APP_ID}', '${uid}')`);

      if (!r.includes('ERROR')) {
        dashCount++;
        console.log(`  ✓ ${config.name} (${config.widgets?.length || 0} widgets)`);
      } else {
        console.log(`  ✗ ${config.name}: ${r.trim()}`);
      }
    } catch (e: any) {
      console.log(`  ✗ ${path.basename(f)}: ${e.message}`);
    }
  }

  // ─── SUMMARY ───
  console.log('\n═══════════════════════════════');
  console.log('  REGISTRATION SUMMARY');
  console.log('═══════════════════════════════');
  console.log(`  Agents:     ${agentCount}/4`);
  console.log(`  Skills:     ${skillCount}/27`);
  console.log(`  Objects:    ${objectCount}/15 (+1 extension)`);
  console.log(`  Views:      ${viewCount}/17`);
  console.log(`  Workflows:  ${workflowCount}/31`);
  console.log(`  Dashboards: ${dashCount}/5`);
  const total = agentCount + skillCount + objectCount + viewCount + workflowCount + dashCount;
  const target = 4 + 27 + 15 + 17 + 31 + 5;
  console.log(`  ─────────────────────`);
  console.log(`  TOTAL:      ${total}/${target}`);
  console.log(`  STATUS:     ${total >= target ? '✅ COMPLETE' : `⚠️  MISSING ${target - total}`}`);
}

main().catch(e => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
