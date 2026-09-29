# Mova 0.2.1 — exact Apple field draft

Prepared September 28, 2026. **Editable Apple 0.2.1 draft saved and read back
2026-09-29 02:45 UTC.** The approved description, promotional text, What's New,
keywords, support URL and review notes match exactly; three core screenshots
were accepted. Existing protected review login/contact fields were preserved.
These saves do not establish signed-build or deployed deletion acceptance.
See [SUBMISSION_SHEET.md](SUBMISSION_SHEET.md) for remaining actions.
Do not select installed build 36 as the final
candidate. Its closed core-flow, signing/SDK and nine-manifest evidence remains
valid reference evidence. Future Pilates and client features are excluded.

Reuse the reviewed class-planning copy from historical core source
`cbc345f42da11db8ce5432045a9e6c24457ba016`,
`docs/app-store-review-draft-2026-09-27.md`. The deletion replacement is reviewed
native commit `6b9831b024d06ed4ff7c2625dfa31e12ffc35674`; its closed 76-test,
types/lint/format results are reused. Production **0.2.1 (37)** finished September
28 at 19:48:13.607 UTC in EAS job `3b993a78-9e45-4ee5-a027-78b73492166f`.
The archive and bounded static findings are linked in [RELEASE_HANDOFF.md](RELEASE_HANDOFF.md).
It has not been uploaded, installed or accepted in a live deletion flow.
The notes' statement that the review account has access remains conditional on
accepted replacement/account access. No new baseline audit is introduced.

## Destination fields

| Field                      | Value                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------- |
| App                        | Mova - Fitness Instruction, Apple ID 6738900718                                                                |
| Locale                     | English (U.S.)                                                                                                 |
| Version                    | 0.2.1                                                                                                          |
| Support URL                | `https://staysinmotion.com/`                                                                                   |
| Privacy Policy URL         | `https://staysinmotion.com/privacy/`                                                                           |
| Terms URL                  | `https://staysinmotion.com/terms/`                                                                             |
| Copyright                  | `2026 James Watts`                                                                                             |
| Review credentials/contact | Preserve existing protected fields; verify access without copying values into notes or Git.                    |
| Final build/release choice | Build 37 is finished; selection remains held for accepted installed replacement and explicit release decision. |

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

The approved 37-character description is now saved in both English (U.S.)
subscription localizations. Monthly Mova Pro and annual Mova Pro Yearly display
names were preserved. The original monthly phrase was 46 characters; the annual
phrase was `A 1 year subscription.` The same approved review notes were saved
for each product:

```text
This subscription unlocks Mova Pro class generation and management. Monthly and yearly plans provide the same features and differ only in billing duration. Review the subscription offer in Settings. The dedicated review account is supplied in the app version's Sign-In Information fields.
```

Both existing Review Information images were visually inspected September 28 in
App Store Connect: monthly 6782429629 and yearly 6782433231 each show a black
portrait image with a Mova Pro logo. They are **present**, but neither shows the
current subscription offer, features, billing period or price. Replace each with
an actual accepted-candidate subscription screen showing the applicable offer;
opening the screen does not authorize purchase/restore/manage transactions.

Actual monthly-selected and annual-selected iPhone offer captures are now saved:

- `/private/tmp/mova-worker3-release-pause-20260928T162834Z/iphone69-monthly-review.png`
- `/private/tmp/mova-worker3-release-pause-20260928T162834Z/iphone69-yearly-review.png`

Both are native 1320 × 2868 exports from reviewed JavaScript in development client
0.2.1/build 3. RevenueCat is configured with a **Test Store** key. The actual
screen shows $9.99/month and $79.99/year (Only $6.66/mo, 33% OFF), with the
applicable plan selected. These are real offer-screen draft candidates, not
evidence of production App Store SKU/price correspondence or signed-build-37 UI.
The authenticated App Store Connect U.S. current-pricing readback now shows
**$5.99/month** for `mova_pro_monthly_v1` and **$59.99/year** for
`mova_pro_yearly_v1`. The Test Store captures differ from those actual U.S. prices
and remain development reference images. Actual signed-37 offer behavior is
unaccepted: running 37 awaits QA sign-in and parent Settings acceptance. Obtain matching
real Store offer screens after native acceptance; do not edit the displayed
prices or use these development captures as final subscription review images.
No purchase, restore or manage action was invoked.

Apple describes the [review screenshot](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-information/)
as showing the offered item/service; it is separate from the optional 1024-pixel
product artwork. The optional artwork was not edited.

## Marketing screenshot inventory

At the initial 0.2.0 inspection, the two English (U.S.) 6.9-inch screenshots
`IMG_9321.PNG` and `IMG_9322.PNG` depicted the retired Spotify-to-Seconds
converter, with the 6.5-inch slot inheriting them. They have now been replaced
in the editable 0.2.1 draft by the three accepted core uploads below. A bounded inventory found no class-builder or generated-class
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

Native 6.9-inch core captures now replace the Mac-window references as the
current iPhone draft candidates:

- `/private/tmp/mova-worker3-release-pause-20260928T162834Z/iphone69-dashboard.png`
- `/private/tmp/mova-worker3-release-pause-20260928T162834Z/iphone69-class-builder.png`
- `/private/tmp/mova-worker3-release-pause-20260928T162834Z/iphone69-builder-options.png`

These are unmodified native Simulator exports, 1320 × 2868, without Mac window
chrome, pointer, capture controls, credentials or account identifiers. Original
RGBA PNGs are fully opaque: every alpha value is 255. Captured device is iPhone
17 Pro Max / iOS 26.5, development client 0.2.1/build 3, with JavaScript served
from reviewed native commit `6b9831b024d06ed4ff7c2625dfa31e12ffc35674` on
`http://localhost:8081`. They are not installed build 37 acceptance.
Dimensions, original paths, hashes and provenance are recorded in protected
`/private/tmp/mova-worker3-release-pause-20260928T162834Z/IPHONE_EXPORTS.json`.

Apple accepted and processed these three format-only derived PNGs in 0.2.1:
`iphone69-dashboard-upload.png`, `iphone69-class-builder-upload.png` and
`iphone69-builder-options-upload.png`, in the same protected folder. macOS
Preview exported PNG with Alpha unchecked. Read-only verification confirms RGB,
PNG color type 2, unchanged 1320 × 2868 dimensions and exact equality of every
decoded RGB pixel to each original. Originals remain untouched. Source/export
hashes are in `APPLE_UPLOAD_EXPORTS.json`.

Apple's [screenshot specification](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
requires files without an alpha channel, even when all alpha values are opaque.
The API accepted these 6.9-inch dimensions in `APP_IPHONE_67`; the initial
`APP_IPHONE_69` attempt failed before uploading images. Corrected EAS metadata
validation had no findings; all three uploads reached processing complete.
Normal metadata pull readback confirms the three-image set.

The free and existing Pro QA fixtures both showed No Saved Classes. The empty
list is preserved as `iphone69-saved-classes-empty-reference.png`; it is reference
evidence, not a generated-class marketing image. No inference or new class was
created. A generated workout/music image is optional and is not an Apple
readiness gate. The already-authorized later one-class acceptance may supply a
real result if useful; this screenshot task does not authorize another call.

`iphone69-deletion-consent.png` records the actual reviewed consent alert on a
free QA account. Request Account Deletion was enabled without Pro. Only Cancel
was pressed; Settings and its signed-in actions remained available afterward.
No deletion POST, erasure, success receipt or completion email was exercised.
A deletion marketing image is not assumed mandatory.

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

## Specific retention facts and remaining decisions

The shared operator runbook is explicit that Auth erasure alone does not erase
Gateway/provider logs, application logs, support exports or backups. Completion
must be held until these stores and approved retention limits have been reviewed.
It preserves necessary financial records and UUID correlation, and requires a
documented purpose, restricted access and applicable retention periods. No
numeric accounting/provider/mailbox period is established in the inspected
contract/runbook or SITE sources.

The $2.50 one-day Sliding Gateway budget and `fdc` API-alias acceptance are closed;
neither proves payload retention, Zero Data Retention or optional sharing.
The specific Gateway Settings readback on September 28, approximately 19:00 UTC,
showed **Collect Logs on**, **100,000-log limit / Delete oldest logs**, **Zero
Data Retention off**, and **Cache Responses off**. The UI explicitly includes
request/response payloads. Its capacity limit establishes no age-based expiry;
[Cloudflare Legacy Logs](https://developers.cloudflare.com/ai-gateway/observability/logging/legacy-logs/)
persist until deleted, with oldest-log removal at the limit. Per-request overrides
still matter; content-free correlation metadata and `skipCache` do not disable
payload logging. No setting or existing log was changed.

The earlier OpenAI Organization Data controls attempt redirected to sign-in.
The user excluded that sign-in/control step from the approved release operations;
it is **not a required action or shipping blocker**. No personal OpenAI account,
key or control is entered or changed, and no account readback is claimed.
The serving and reviewed-candidate primary provider/billing path is being resolved
by the runtime lane, separately from direct fallback. A Gateway-billed OpenAI
primary would not establish use of the user's personal API account. Keep the
upstream disclosure accurate for the actual path; do not claim zero retention
or an account setting from published defaults. The protected readback preserves
that narrow distinction without requiring another login or audit.

The remaining owner decisions are approved expiry criteria or periods and access
roles for accounting/UUID correlation and unsettled liabilities; support
mailbox/exports and notification handoff disposal; backups and application logs;
and the operator's means of finding/removing applicable Gateway/provider logs.
The inspected runbook requires these decisions but supplies no actual periods.
Confirming completion clears contact from the request record; it does not prove
mailbox or exported-handoff disposal. The seven-day manual fulfillment target is
not every store's expiry. Keep completion/publication held as applicable until
these obligations are resolved. Detailed evidence is in protected
`/private/tmp/mova-worker3-release-pause-20260928T162834Z/RETENTION_READBACK.md`.
No broad audit or Xcode PDF gate is reopened.

Source-path clarification from the runtime lane: pinned class generation and
uploaded-document primary dispatch use Cloudflare AI Gateway unified billing / AI
binding for OpenAI models and do not read a personal OpenAI key. Production
authority requires gateway enabled and direct fallback disabled, with unknown
configuration failing closed. Live serving flag/source readback remains owned by
that lane. No routing flag or key was removed or changed by this packet.

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

## Saved editable draft readback

The existing standard EAS metadata workflow used the already-configured managed
App Store Connect authentication. No authentication keys/cookies were manually
extracted or changed, and no new credentials were added. The isolated workspace is `/private/tmp/mova-apple-metadata-20260928`
(mode 0700); normal metadata exports containing protected review fields are 0600
and remain outside Git. Do not copy their contents into tickets or handoffs.

`APPLE_DRAFT_READBACK.json` records only checks and counts: app `6738900718`,
version `0.2.1`, five exact text matches, exact review-note match, every protected
review contact/login field present and preserved, and three `APP_IPHONE_67`
images. The existing public privacy-policy URL was preserved. No release action,
final build selection, subscription review attachment or privacy-label publication
was performed by this lane. The normal Apple browser session is now authenticated, so the earlier
reauthentication blocker is cleared. Both subscription descriptions and optional
product review notes were subsequently saved and read back through that UI;
review images and first-review attachments remain pending.

The configured dedicated Apple review login is distinct from the ENV QA fixtures.
Its current app access and Pro validity for the review window remain unverified;
preserve it and check through the accepted signed candidate before submission.
Do not assume QA fixture access proves the protected review account's access.

## Authenticated subscription and privacy preparation

Both subscriptions remain Prepare for Submission. Their approved description
and 288-character product review notes match the normal browser readback. Actual
U.S. prices are $5.99/month and $59.99/year; no price, optional artwork, purchase,
subscription review image or final review status was changed. Private proof:
`/private/tmp/mova-apple-metadata-20260928/SUBSCRIPTION_DRAFT_READBACK.json` and
`apple-monthly-copy-saved.png`, `apple-yearly-copy-saved.png`,
`apple-monthly-price-and-copy.png`, `apple-yearly-price.png` in the protected
capture folder. The saved core draft is also visible in
`apple-021-draft-readback.png`.

The existing privacy wizard was opened using only the previously reviewed
matrix. Its initial Email Address setup ends with **Publish**, rather than a
Save-to-draft action. Publication is held, so setup was canceled. A reload
confirms Published a year ago, Data Not Collected and the unchanged legacy gist
policy URL, with no unfinished type setup persisted. No privacy answers were
saved or published. Keep the matrix above for the coordinated publication;
User ID Analytics remains the same previously identified owner-use decision.
`PRIVACY_PREPARATION_STATUS.json` records this narrow UI boundary outside Git.
This is not a new privacy audit or an additional release gate.

The earlier Mac launch gap is now resolved: the native owner bound the actual
existing translocated 37 bundle and verified its live welcome UI and control at
2026-09-29 04:33:31 UTC. The session is signed out. User-operated QA sign-in and
parent changed-Settings acceptance remain pending; Store offer capture follows
only that accepted handoff. No additional Mac diagnosis or build is needed for
this resolved targeting gap. The existing authenticated 0.2.1 draft surface displays no
explicit Mac-availability/unsupported flag or 37-versus-36 compatibility fact;
that comparison is unavailable here. No platform gate, new build or recovery
request is inferred. Private fact: `MAC_AVAILABILITY_UI_READBACK.json`.

The runtime owner now reports recovery `919352f6` serving 100%, routing false,
Gateway true and direct fallback false, with working jobs 0 and zero paid spend.
The earlier serving-flag gap is cleared by that owner-reported readback; no new
runtime audit or paid call was performed by this lane. Actual deletion/operator
and signed-native acceptance remain with their assigned release lanes.

## Running build 37 — launch blocker cleared

At 2026-09-29 04:33:31 UTC, the native owner verified the actual running and
controllable 37 welcome UI by binding the existing translocated bundle. The
former installed-path automation gap is cleared. No new build, archive/signing
pass, Mac availability check or further launch diagnosis is required for that
gap. The session is **signed out**; no sign-in, guest, Settings, deletion or
billing action was exercised in this handoff.

Current proof:
`/private/tmp/mova-build37-testflight-20260928/CURRENT_RUNNING_MAC37_UI_ACCEPTANCE.json`.
The user operates QA sign-in, and the parent accepts the changed Settings flow;
only then does this lane capture both actual Store offers and prepare their
review images/attachments. Protected reviewer access and deletion/operator
acceptance remain separate. The current U.S. prices stay $5.99/month and
$59.99/year; development captures remain unsuitable as final review images.
All saved Apple/core/subscription text remains unchanged, and final submission,
privacy publication, SITE publication and future feature work retain their
existing holds. No native control or repeat verification was performed by this
Apple lane for this correction.
