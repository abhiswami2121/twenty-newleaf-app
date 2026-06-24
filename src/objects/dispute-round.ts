import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'disputeRound',
  labelSingular: 'Dispute Round',
  labelPlural: 'Dispute Rounds',
  icon: 'IconRotateClockwise',
  fields: [
    {
      name: 'roundNumber',
      label: 'Round Number',
      type: FieldType.NUMBER,
    },
    {
      name: 'letterGenerated',
      label: 'Letter Generated',
      type: FieldType.BOOLEAN,
    },
    {
      name: 'letterMailedDate',
      label: 'Letter Mailed Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'responseReceived',
      label: 'Response Received',
      type: FieldType.BOOLEAN,
    },
    {
      name: 'responseDate',
      label: 'Response Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'result',
      label: 'Result',
      type: FieldType.SELECT,
      options: [
        { label: 'Pending', value: 'pending', color: 'yellow' },
        { label: 'Deleted', value: 'deleted', color: 'green' },
        { label: 'Verified', value: 'verified', color: 'red' },
        { label: 'No Response', value: 'no_response', color: 'gray' },
        { label: 'Updated', value: 'updated', color: 'blue' },
      ],
    },
    {
      name: 'notes',
      label: 'Notes',
      type: FieldType.TEXT,
    },
    {
      name: 'dispute',
      label: 'Dispute',
      type: FieldType.RELATION,
      relationType: RelationType.MANY_TO_ONE,
      targetObject: 'dispute',
    },
  ],
});
