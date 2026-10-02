import { MOVA_SUPPORT_EMAIL } from './links';

// The backend receipt is authoritative for versions with the in-app request flow.
export const MOVA_ACCOUNT_DELETION_COPY = {
  label: 'Request Account Deletion',
  privacyLinkLabel: 'Read Mova Privacy Policy',
  initiation:
    'If your version of Mova shows Request Account Deletion in Settings, choose it and confirm your request. You do not need Mova Pro to make an in-app deletion request.',
  receipt:
    'For an in-app request Mova accepts, the app shows a receipt with your deletion deadline and request reference, then signs you out. The receipt confirms your request; deletion is still pending.',
  fulfillment:
    'An accepted in-app request remains pending until it is fulfilled manually. Repeating the request preserves its original reference and server-assigned deadline. Contact support if you need a status update or the deadline passes.',
  billingWarning:
    'Deleting your Mova account does not cancel your App Store subscription. Manage your subscription with Apple to stop future charges. You can request deletion without canceling first.',
  retainedRecords:
    'Mova retains financial and accounting records, costs, and account identifiers needed to correlate those records for billing reconciliation, disputes, and applicable accounting or legal obligations.',
  historicalArchive: `If your version shows Archive Account instead, that action retains account information and does not submit a deletion request. Email ${MOVA_SUPPORT_EMAIL} to request permanent deletion.`,
} as const;
