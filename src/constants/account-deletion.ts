// Release-copy draft: publish only with the accepted account-deletion replacement.
// The backend receipt is authoritative; seven days reflects its provisional policy.
export const MOVA_ACCOUNT_DELETION_COPY = {
  label: 'Request Account Deletion',
  privacyLinkLabel: 'Read Mova Privacy Policy',
  initiation:
    'In Settings, choose Request Account Deletion and confirm your request. You do not need Mova Pro to request deletion.',
  receipt:
    'After Mova accepts your request, you receive a receipt with your deletion deadline and request reference, and Mova signs you out. The receipt confirms your request; deletion is still pending.',
  fulfillment:
    'Our team fulfills requests manually and targets completion within seven days of acceptance. Your receipt shows the server-assigned deadline. We email your account address when deletion is complete. Repeating a request does not restart its original deadline.',
  billingWarning:
    'Deleting your Mova account does not cancel your App Store subscription. Manage your subscription with Apple to stop future charges. You can request deletion without canceling first.',
  retainedRecords:
    'Mova retains financial and accounting records, costs, and account identifiers needed to correlate those records for billing reconciliation, disputes, and applicable accounting or legal obligations.',
  historicalArchive:
    'Historical Archive Account actions retained account information and did not constitute deletion requests.',
} as const;
