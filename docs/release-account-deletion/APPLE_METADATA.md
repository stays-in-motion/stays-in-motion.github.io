# Mova 0.2.1 — exact Apple field draft

Prepared September 28, 2026. **Local draft only; no Apple field was saved.**
All field blocks below are ready to paste after the reviewed deletion replacement
and deployed endpoint are accepted. Do not select installed build 36 as the final
candidate. Its closed core-flow, signing/SDK and nine-manifest evidence remains
valid reference evidence. Future Pilates and client features are excluded.

Reuse the reviewed class-planning copy from native source
`cbc345f42da11db8ce5432045a9e6c24457ba016`,
`docs/app-store-review-draft-2026-09-27.md`. The only additions are the legal-link
footer, the actual deletion change in What's New, and review instructions drawn
from the locally verified native Settings implementation and shared contract.
The deletion flow is not in build 36. Native SHA/build identity and the supplied
review account's access must be accepted before these notes are used; the notes'
statement that the account has access is conditional on that acceptance.

## Destination fields

| Field                      | Value                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| App                        | Mova - Fitness Instruction, Apple ID 6738900718                                                         |
| Locale                     | English (U.S.)                                                                                          |
| Version                    | 0.2.1                                                                                                   |
| Support URL                | `https://staysinmotion.com/`                                                                            |
| Privacy Policy URL         | `https://staysinmotion.com/privacy/`                                                                    |
| Terms URL                  | `https://staysinmotion.com/terms/`                                                                      |
| Copyright                  | `2026 James Watts`                                                                                      |
| Review credentials/contact | Preserve existing protected fields; verify access without copying values into notes or Git.             |
| Final build/release choice | Held for exact accepted replacement and explicit release decision. No build number above 36 is assumed. |

## Exact field blocks

### Promotional text

121 characters; limit 170. Paste the block contents only.

```text
Build personalized, instructor-ready fitness classes with structured intervals, music guidance, and reusable class plans.
```

### Description

1023 characters; limit 4000. Paste the block contents only.

```text
Mova helps fitness instructors turn a class idea into a structured plan they can teach.

Choose a workout style, duration, intensity, equipment, music genre, interval style, and class structure. Mova generates an editable class with timed intervals, exercise guidance, and music recommendations. Review the result, adjust it for your clients, and save it for later.

Mova Pro unlocks class generation and management features through an auto-renewing monthly or yearly subscription. Subscription terms and pricing are shown before purchase. You can manage or cancel your subscription through your Apple account settings.

Generated classes are planning aids for qualified instructors. Review and adapt every class for participant ability, equipment, environment, and applicable professional guidance before teaching it.

Privacy Policy: https://staysinmotion.com/privacy/
Terms of Service: https://staysinmotion.com/terms/
Terms of Use (Apple Standard EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
```

### What's New

367 characters; limit 4000. Paste the block contents only.

```text
- Create personalized fitness classes from a guided class builder.
- Review structured workout intervals and music guidance.
- Save generated classes and reopen them for editing.
- Manage Mova Pro access from Settings.
- Improved sign-in, class import errors, and generation feedback.
- Request account deletion in Settings with a receipt and completion confirmation.
```

### Keywords

77 characters; limit 100. Paste the block contents only.

```text
fitness instructor,workout planner,interval training,class builder,HIIT,music
```

### App Review notes

2864 characters; limit 4000. Paste the block contents only.

```text
Mova is a class-planning tool for fitness instructors. Sign in with the dedicated App Review account supplied in the Sign-In Information fields.

Core class-planning flow:
1. Open Create Class from the dashboard.
2. Keep the default 20-minute HIIT/Pop configuration or adjust the class inputs.
3. Tap Generate class. Generation requires active Mova Pro access and may take several seconds.
4. Review the generated class, switch between its workout and music information, then tap Save.
5. Choose View Saved Classes and reopen the saved class with its Edit action.
6. Open Settings to view subscription status and purchase-management actions.

The monthly product (mova_pro_monthly_v1) and yearly product (mova_pro_yearly_v1) unlock the same Mova Pro features and differ only in billing duration. Purchases use Apple's in-app purchase system. The supplied review account has the access needed for the class-generation steps.

Account deletion:
Open Settings and choose Request Account Deletion in the Account support card. This is available without Mova Pro and does not require subscription cancellation. The confirmation alert is titled Request Account Deletion? It explains permanent deletion, manual fulfillment, the receipt deadline and sign-out after request acceptance, then asks Do you want to request permanent deletion? Cancel dismisses the alert without submitting a request; Request Account Deletion explicitly submits it.

The separate Manage Subscriptions link opens Apple's subscription management. The billing warning reads: Deleting your Mova account does not cancel your App Store subscription. Manage your subscription with Apple to stop future charges. You can request deletion without canceling first.

After acceptance, Deletion Requested shows the server-assigned deadline and request reference, explains that deletion is pending, and confirms that an email will follow completion. The app clears its account state and signs out only after a valid receipt. Manual fulfillment targets seven days from the first accepted request; repeating a request preserves the original reference and deadline. A failed request shows Deletion Request Unconfirmed and leaves the session open for retry. An accepted pending request is never reported as completed deletion. Replays show the actual pending, erased, or completed state: Account Data Erased means completion confirmation is pending, while Account Deletion Completed means email confirmation is recorded.

Deletion removes the Mova account and owned class-planning content, including uploaded documents. Necessary financial/accounting records, costs and account identifiers used to correlate those records are retained as disclosed in the Privacy Policy. Historical Archive Account actions were retention actions and are not deletion requests. We email the account address after completed deletion.
```

## Subscription text and review images

Preserve monthly display name `Mova Pro`, yearly display name `Mova Pro Yearly`,
product IDs and billing durations. Proposed description for **both** products:

```text
Unlock class building and management.
```

This preserves the reviewed feature claim in 37 characters, within Apple's
45-character limit. The current monthly phrase is 46 characters; this removes
only its final word. It also replaces the yearly `A 1 year subscription.`
without inventing a feature or a price. Optional review notes for each product:

```text
This subscription unlocks Mova Pro class generation and management. Monthly and yearly plans provide the same features and differ only in billing duration. Review the subscription offer in Settings. The dedicated review account is supplied in the app version's Sign-In Information fields.
```

Both existing Review Information images were visually inspected September 28 in
App Store Connect: monthly 6782429629 and yearly 6782433231 each show a black
portrait image with a Mova Pro logo. They are **present**, but neither shows the
current subscription offer, features, billing period or price. Replace each with
an actual accepted-candidate subscription screen showing the applicable offer;
opening the screen does not authorize purchase/restore/manage transactions.
Apple describes the [review screenshot](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-information/)
as showing the offered item/service; it is separate from the optional 1024-pixel
product artwork. The optional artwork was not edited.

## Marketing screenshot inventory

The two existing English (U.S.) 6.9-inch screenshots `IMG_9321.PNG` and
`IMG_9322.PNG` depict the retired Spotify-to-Seconds converter. The 6.5-inch slot
inherits them. A bounded inventory found no class-builder or generated-class
marketing files. The prior simulator welcome capture is a layout reference,
not the accepted replacement:

`/Users/jameswatts/Desktop/code/stays-in-motion/mova-workspace/mova-native/reports/simulator-e2e/artifacts/2026-09-13-release-welcome.png`
(1206 × 2622, older local Release artifact).

Current reference captures are now available outside Git:

- `/private/tmp/mova-worker3-release-pause-20260928T162834Z/build36-dashboard-reference.jpg`
- `/private/tmp/mova-worker3-release-pause-20260928T162834Z/build36-class-builder-reference.jpg`
- `/private/tmp/mova-worker3-release-pause-20260928T162834Z/build36-builder-options-reference.jpg`

All three are original 576 × 1090 JPEG iOS-on-Mac window captures. The observed
installed Info.plist reports 0.2.1/36 and `main.jsbundle` SHA-256 is
`8bca0c668c78a94326d2cbe2102fa51089817bde60a1c722314f31215e49ec69`,
matching the closed artifact evidence. They have Mac window/capture chrome and
are identity-bound visual references, not App Store iPhone uploads. Original
bytes, dimensions and hashes are recorded in
`/private/tmp/mova-worker3-release-pause-20260928T162834Z/SCREENSHOT_REFERENCES.json`.
No class generation, purchase, upload or account mutation was performed. A
read-only existing-saved-class capture attempt reached a loading view, then
native-window capture failed. No generated-class image was obtained; this does
not reopen the already-closed generation/runtime acceptance.

Both inspected subscription attachment readbacks are retained beside them as
`monthly-review-image-readback.jpg` and `yearly-review-image-readback.jpg`
(1430 × 720 browser-window captures), outside Git. Both show the logo-only image.

Capture clean Create Class, generated workout/music, and saved-class screens from
an accepted iPhone artifact using generic content without account identifiers,
developer overlays or credentials. Bind source/build identity and actual device
size. Do not stretch old images or treat iOS-on-Mac window captures as iPhone
upload files. A deletion marketing screen is not assumed mandatory; its consent
and receipt belong in the focused review evidence.

## Privacy answer delta

The existing public answer is Data Not Collected and the policy URL is a legacy
gist. Preparation uses the reviewed category matrix with the RevenueCat
correction below. Publishing privacy answers remains held.

| Data type             | Collected | Linked | Tracking | Purposes                                                                                                                |
| --------------------- | --------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| Email Address         | Yes       | Yes    | No       | App Functionality                                                                                                       |
| Fitness               | Yes       | Yes    | No       | App Functionality                                                                                                       |
| Other User Content    | Yes       | Yes    | No       | App Functionality                                                                                                       |
| Customer Support      | Yes       | Yes    | No       | App Functionality                                                                                                       |
| Purchase History      | Yes       | Yes    | No       | Analytics and App Functionality                                                                                         |
| User ID               | Yes       | Yes    | No       | App Functionality; Analytics for the custom RevenueCat account ID is proposed from its customer/purchase dashboard use. |
| Product Interaction   | Yes       | Yes    | No       | App Functionality                                                                                                       |
| Other Usage Data      | Yes       | Yes    | No       | App Functionality                                                                                                       |
| Other Diagnostic Data | Yes       | Yes    | No       | App Functionality                                                                                                       |

[RevenueCat guidance](https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy)
requires purchase Analytics plus App Functionality. The actual app sends its
Supabase account UUID to RevenueCat, so Purchase History is linked. User ID's
Analytics purpose is an inference from that custom-ID customer/history use;
confirm the owner's actual use before publication. Do not apply Analytics to all
other categories. Reconcile the replacement's actual delta with retained build
36 embedded-manifest evidence; no new Xcode PDF requirement is introduced.

## Actual privacy facts still unresolved

The shared operator runbook is explicit that Auth erasure alone does not erase
Gateway/provider logs, application logs, support exports or backups. Completion
must be held until these stores and approved retention limits have been reviewed.
It preserves necessary financial records and UUID correlation, and requires a
documented purpose, restricted access and applicable retention periods. No
numeric accounting/provider/mailbox period is established in the inspected
contract/runbook or SITE sources.

The $2.50 one-day Sliding Gateway budget and `fdc` API-alias acceptance are closed;
neither proves payload retention, Zero Data Retention or optional sharing. The
September 27 notes reported Gateway Collect Logs on / ZDR off, while OpenAI
optional-sharing controls were unverified. Those dated notes are not refreshed
live settings. Keep these concrete owner inputs pending: current Gateway payload
logging/retention, actual OpenAI sharing/retention controls, support-mailbox and
backup handling, and the criteria/period for retained accounting identifiers.
No setting or retention guarantee is guessed, and no broad audit is reopened.

## Rollout dependency

The SITE draft uses September 28 as its preparation-date effective-date draft.
Set the actual effective date at approved publication and confirm the backend's
single seven-day policy value. Publish deletion instructions only after native,
endpoint and operator acceptance; then use the accurate policy URL/privacy answers
and candidate screenshots for Apple preparation. Keep final build selection,
first-review attachment of both subscriptions and App Review submission in the
coordinator's exact authorized rollout.

[Apple deletion guidance](https://developer.apple.com/support/offering-account-deletion-in-your-app/)
allows manual fulfillment with clear timing and completed-deletion confirmation;
[privacy requirements](https://developer.apple.com/app-store/review/guidelines/#privacy)
require accurate retention/deletion disclosure. These sources support the wording,
not an assertion that the replacement is already deployed or approved.
