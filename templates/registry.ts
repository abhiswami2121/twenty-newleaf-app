// Template Registry — Maps template keys to template objects for workflow resolution
// Used by the workflow engine to resolve template: 'key' references at runtime
// All 60 templates registered here

import {
  // SMS (30)
  welcomeLeadSms,
  qualificationFollowupSms,
  agreementReminderSms,
  paymentSuccessSms,
  paymentDeclinedSms,
  disputeUpdateSms,
  scoreCelebrateSms,
  missedCallSms,
  recoveryLinkSms,
  dayZeroChargedSms,
  cardExpiringSms,
  subPausedSms,
  subResumedSms,
  graduationSms,
  milestone50ptsSms,
  missingDocSms,
  appointmentReminderSms,
  callbackPromisedSms,
  manualReviewSms,
  achFailedSms,
  chargebackReceivedSms,
  ticketResolvedSms,
  agreementSignedSms,
  accountPausedSms,
  winBackSms,
  referralThanksSms,
  monthlyStatementReadySms,
  scoreDroppedAlertSms,
  disputeResponseSms,
  alumniCheckinSms,
} from './sms';

import {
  // Email (20)
  welcomeEnrolledEmail,
  monthlyStatementEmail,
  disputeRoundCompleteEmail,
  cardExpiringEmail,
  scoreMilestoneEmail,
  graduationEmail,
  referralThanksEmail,
  billingRecoveryEmail,
  winBackEmail,
  dayZeroReceiptEmail,
  agreementSignedEmail,
  paymentFailedEmail,
  accountPausedEmail,
  milestoneCelebrationEmail,
  alumniQuarterlyEmail,
  disputeRound1Email,
  disputeRound2Email,
  disputeRound3Email,
  cfpbFiledEmail,
  accountResumedEmail,
} from './email';

import {
  // Letters (10)
  round1FactualDisputeLetter,
  round2MethodOfVerificationLetter,
  round3IntentToSueLetter,
  directCreditorValidationLetter,
  cfpbComplaintLetter,
  metro2ChallengeLetter,
  goodwillLetter,
  identityTheftAffidavitLetter,
  debtValidationFdcpaLetter,
  section609Letter,
} from './letters';

// ── Registry Map (key → template object) ──────────────────────
// Workflows reference templates by string key (e.g., template: 'welcome_lead')
// This registry maps those keys to actual template objects at runtime

export const templateRegistry = {
  // SMS
  welcome_lead: welcomeLeadSms,
  qualification_followup: qualificationFollowupSms,
  agreement_reminder: agreementReminderSms,
  payment_success: paymentSuccessSms,
  payment_declined: paymentDeclinedSms,
  dispute_update: disputeUpdateSms,
  score_celebrate: scoreCelebrateSms,
  missed_call: missedCallSms,
  recovery_link: recoveryLinkSms,
  day_zero_charged: dayZeroChargedSms,
  card_expiring: cardExpiringSms,
  sub_paused: subPausedSms,
  sub_resumed: subResumedSms,
  graduation: graduationSms,
  milestone_50pts: milestone50ptsSms,
  missing_doc: missingDocSms,
  appointment_reminder: appointmentReminderSms,
  callback_promised: callbackPromisedSms,
  manual_review: manualReviewSms,
  ach_failed: achFailedSms,
  chargeback_received: chargebackReceivedSms,
  ticket_resolved: ticketResolvedSms,
  agreement_signed: agreementSignedSms,
  account_paused: accountPausedSms,
  win_back: winBackSms,
  referral_thanks: referralThanksSms,
  monthly_statement_ready: monthlyStatementReadySms,
  score_dropped_alert: scoreDroppedAlertSms,
  dispute_response: disputeResponseSms,
  alumni_checkin: alumniCheckinSms,

  // Email
  welcome_enrolled: welcomeEnrolledEmail,
  monthly_statement: monthlyStatementEmail,
  dispute_round_complete: disputeRoundCompleteEmail,
  card_expiring_email: cardExpiringEmail,
  score_milestone: scoreMilestoneEmail,
  graduation_email: graduationEmail,
  referral_thanks_email: referralThanksEmail,
  billing_recovery: billingRecoveryEmail,
  win_back_email: winBackEmail,
  day_zero_receipt: dayZeroReceiptEmail,
  agreement_signed_email: agreementSignedEmail,
  payment_failed: paymentFailedEmail,
  account_paused_email: accountPausedEmail,
  milestone_celebration: milestoneCelebrationEmail,
  alumni_quarterly: alumniQuarterlyEmail,
  dispute_round_1: disputeRound1Email,
  dispute_round_2: disputeRound2Email,
  dispute_round_3: disputeRound3Email,
  cfpb_filed: cfpbFiledEmail,
  account_resumed: accountResumedEmail,

  // Letters
  round_1_factual_dispute: round1FactualDisputeLetter,
  round_2_method_of_verification: round2MethodOfVerificationLetter,
  round_3_intent_to_sue: round3IntentToSueLetter,
  direct_creditor_validation: directCreditorValidationLetter,
  cfpb_complaint: cfpbComplaintLetter,
  metro2_challenge: metro2ChallengeLetter,
  goodwill_letter: goodwillLetter,
  identity_theft_affidavit: identityTheftAffidavitLetter,
  debt_validation_FDCPA: debtValidationFdcpaLetter,
  section_609_letter: section609Letter,
} as const;

export type TemplateKey = keyof typeof templateRegistry;
export type Template = typeof templateRegistry[TemplateKey];

// Helper: resolve a template by key (used by workflow engine)
export function resolveTemplate(key: string): Template | undefined {
  return templateRegistry[key as TemplateKey];
}

export default templateRegistry;
