# Apple release preparation handoff

Prepared September 28, 2026; updated 2026-09-29 14:09 UTC. The editable Apple
0.2.1 text, review notes and three core screenshots are saved and read back.
Both approved subscription descriptions/product notes are now saved as well;
Apple browser authentication is confirmed.
SITE source commit `78f2606b7947bf2ea5b7372ea3f8d654a5a60e1f` is unpushed.
Future Pilates/client work remains paused. Final App Review submission, public
activation and SITE publication remain held. No backend rollout, privacy-label
publication, purchase or inference occurred in this lane.

The concrete next steps are in [SUBMISSION_SHEET.md](SUBMISSION_SHEET.md).

## Replacement identity

- Native source: `6b9831b024d06ed4ff7c2625dfa31e12ffc35674`, reviewed clean;
  closed 76 focused tests plus types/lint/format are reused.
- Finished production artifact: **Mova 0.2.1 (37)**, bundle
  `com.staysinmotion.mova`, EAS job `3b993a78-9e45-4ee5-a027-78b73492166f`.
- Completed `2026-09-28T19:48:13.607Z`; exactly one separately authorized
  USD0 Free-quota build. No retry or additional build is proposed here.
- IPA: `/private/tmp/mova-native-account-deletion-20260928/eas-production-replacement/mova-0.2.1-37.ipa`
- IPA SHA-256: `fd001826324c0fdddea06e30733df0ad64ae9b946eee1ba20282f9d3719402d1`
- Existing static report: `/private/tmp/mova-native-account-deletion-20260928/eas-production-replacement/archive-inspection/ARCHIVE_INSPECTION.md`
  records matching hash/bundle/version, Store profile, arm64, signature verification
  and nine selected packaged deletion/billing strings. Selected signature
  entitlement extraction was unavailable; the non-debug entitlement is confirmed
  in the profile only. Native fingerprint is not proof of JavaScript identity.
- The single TestFlight upload `cffb4d13-ee0f-40f2-beb6-1deb70a624c9` finished
  and Apple processing completed, as reported by the native release owner.
  Installation completed; actual on-disk app identity is 0.2.1 (37), as reported
  by the native owner at 03:52/03:56 UTC. The prior Mac launch gap is resolved:
  the actual existing translocated 37 bundle now runs and is controllable, with
  live welcome UI verified at 04:33:31 UTC. Normal supplied-credential sign-in
  was subsequently authorized. The native owner's changed Settings/Cancel handoff
  is now accepted; this lane's later Store/reviewer readback appears below. Historical build 36 remains reference evidence.
  The current 0.2.1 Apple draft UI shows no explicit Mac support flag or
  37-versus-36 availability difference; that fact is unavailable on this surface.

## Real native iPhone assets

Folder: `/private/tmp/mova-worker3-release-pause-20260928T162834Z`.
All seven files below are original, unmodified 1320 × 2868 native exports.
Original RGBA alpha values are uniformly 255. Apple requires no alpha channel;
the three core `-upload.png` files are separate RGB exports from macOS Preview,
with identical decoded RGB pixels and unchanged dimensions. Apple accepted all
three in the editable 0.2.1 draft. Originals, dimensions and hashes are in
`IPHONE_EXPORTS.json`; the derived export checks/hashes are in
`APPLE_UPLOAD_EXPORTS.json`. No credentials/account identifiers,
Mac window chrome, pointer or development overlay appear in these captures.

| File                                         | Use                     | Truthful caption                                     |
| -------------------------------------------- | ----------------------- | ---------------------------------------------------- |
| `iphone69-dashboard.png`                     | Core marketing draft    | Create classes and revisit saved routines.           |
| `iphone69-class-builder.png`                 | Core marketing draft    | Choose class style, music and duration.              |
| `iphone69-builder-options.png`               | Core marketing draft    | Set equipment, interval style and class structure.   |
| `iphone69-monthly-review.png`                | Monthly review draft    | Monthly selected in the actual Test Store offer.     |
| `iphone69-yearly-review.png`                 | Yearly review draft     | Annual selected in the actual Test Store offer.      |
| `iphone69-deletion-consent.png`              | Focused review evidence | Free-account consent alert; Cancel only, no request. |
| `iphone69-saved-classes-empty-reference.png` | Reference only          | Existing QA fixture has no saved classes.            |

Capture provenance: iPhone 17 Pro Max / iOS 26.5, Expo development client
**0.2.1 / build 3**, JavaScript served from original native source
`6b9831b024d06ed4ff7c2625dfa31e12ffc35674` by localhost Metro on port 8081.
Installed executable SHA-256:
`ee40a54959249d4b36cd29e587017755d26193b7dee5a437aad16eaed735dd27`.
This is development-client UI evidence, not signed-build-37 acceptance.

RevenueCat key class is **Test Store**. The actual offer shows **$9.99/month**,
**$79.99/year**, Only $6.66/mo and 33% OFF. App Store Connect now confirms U.S.
current prices **$5.99/month** (`mova_pro_monthly_v1`) and **$59.99/year**
(`mova_pro_yearly_v1`). These development captures differ from the U.S. Store
prices and cannot be final subscription review images. Obtain real matching
Store offer captures after launched/native acceptance. Do not alter the displayed prices or fabricate a generated result.
Both existing Apple subscription review attachments were inspected and are
logo-only. Optional 1024-pixel product artwork is separate and unchanged.

The free and Pro QA fixtures both returned No Saved Classes. A generated-class
marketing image is optional, not a readiness gate. The approved later one-class
acceptance can supply a real result if useful, without another screenshot-driven
inference. QA login used the user-authorized existing ENV fixture credentials;
credential variables were cleared and no credentials were persisted in this packet.
Free-account deletion consent was opened and canceled. The session remained
open. No destructive request, receipt, replay, erasure or completion was tested.

## Field-ready draft and retention facts

[APPLE_METADATA.md](APPLE_METADATA.md) contains exact English-US description,
promotional text, What's New, keywords, App Review notes, subscription text and
privacy matrix. Existing protected review credential/contact fields are preserved.
The approved five metadata fields and App Review notes were saved through normal
EAS metadata and match the subsequent 0.2.1 readback exactly. Both contact and
dedicated demo login fields remain present and unchanged. The dedicated login now reaches the accepted build's Dashboard, but Settings
shows Pro inactive; paid-feature access and review-window validity remain unaccepted; they differ from the
ENV QA fixtures. Statements about review access and live deletion remain
conditional on accepted replacement/backend operations. The existing public
privacy-policy URL and privacy answers were not changed.

The isolated metadata workspace is `/private/tmp/mova-apple-metadata-20260928`.
Its `APPLE_DRAFT_READBACK.json` contains only verification booleans and counts.
The standard CLI managed authentication was used without raw key/cookie access.
Protected exports stay outside Git and must not be pasted into this handoff.

Gateway's specific September 28 Settings readback: Collect Logs on, 100,000-log
limit with Delete oldest logs, ZDR off, cache off. Payload logging is explicit;
there is no age-based expiry. The user excluded OpenAI account sign-in/control
work; that input is not a shipping blocker. No personal API account, key or
setting is entered or changed, and no account readback is claimed. Runtime
ownership is confirming the actual primary provider/billing path separately from
fallback. Gateway billing does not prove use of the user's personal API account.
No settings or logs were changed. Bounded evidence and primary links:
`/private/tmp/mova-worker3-release-pause-20260928T162834Z/RETENTION_READBACK.md`.

Source requires accounting/UUID retention and separate review of support copies,
backups, application and provider logs. It supplies no numeric expiry for those
stores. The current SITE draft discloses necessary retention and the provisional
seven-day manual fulfillment target without promising all copies vanish in seven
days. No runtime copy change was required during this docs-only follow-up.

Source-path clarification from the runtime lane: pinned class generation and
uploaded-document primary dispatch use Cloudflare AI Gateway unified billing / AI
binding for OpenAI models and do not read a personal OpenAI key. Production
authority requires gateway enabled and direct fallback disabled, with unknown
configuration failing closed. Live serving flag/source readback remains owned by
that lane. No routing flag or key was removed or changed by this packet.
The runtime owner subsequently reports recovery `919352f6` serving 100%, routing
false, Gateway true and direct fallback false, working jobs 0 and zero paid
spend. That owner-reported readback clears the old serving-flag gap. Actual
signed-app and deletion/operator acceptance remain pending with the release owners.

## Narrow remaining inputs and rollout actions

1. **Apple authentication and drafts are complete.** The normal browser session
   is authenticated. In addition to the saved 0.2.1 text/review/core-image draft,
   both approved subscription descriptions and product notes were saved and
   verified. No Apple sign-in action remains for the user in this packet.
   Final submission and public publication remain held.
2. **Signed-app access and matching offer images.** Actual 37 now runs and is
   controllable on this Mac. Changed Settings/Cancel is closed; the dedicated
   reviewer login succeeds and real Store prices match. Reviewer Pro is inactive;
   selected-plan captures and review-image replacements await working controls. Apple U.S. prices are
   $5.99/month and $59.99/year; preserved development captures show $9.99/$79.99
   and must not be used as final review attachments. No price change or purchase.
3. **Provider-path disclosure.** Reuse the runtime lane's actual serving and
   reviewed-candidate primary provider/billing evidence. Describe that upstream
   accurately, separately from configured direct fallback. Recovery `919352f6`
   now serves with Gateway true and direct fallback false, reported by its owner.
   OpenAI personal-account work remains excluded and is not required for shipping.
4. **Owner retention/fulfillment decisions.** Approve expiry criteria/periods and
   access roles for accounting UUIDs/unsettled liabilities, support email/exports
   and notification handoffs, backups/application logs, and applicable
   Gateway/provider logs. Define the operator's removal process and confirm the
   seven-day fulfillment value and actual publication effective date.
5. **Coordinated release sequence.** The exact backend/pilot/disposable-account
   operations and one build-37 TestFlight upload/install were approved in the
   coordinator workflow, except OpenAI account work. Epic 1/Epic 2 own those
   actions; do not duplicate them here. Editable Apple draft preparation is
   approved. After their installed and backend/operator acceptance, continue
   with both matching subscription review screenshots, both first-review
   attachments, protected review access and the accepted candidate. Final App Review
   submission, public activation and SITE copy publication remain held for
   acceptance and specific final scope. Do not delete an
   existing QA/customer account, push SITE master, or select historical build 36.

These inputs do not require repeating the closed source review, baseline runtime,
HTTPS acceptance or nine-manifest audit. No new Xcode PDF requirement is added.

## Privacy browser boundary and current proof

The already-reviewed nine-type matrix remains local. In the existing initial
privacy setup, the final action is Publish; it does not save completed answers
as an editable draft. The temporary type selection/email setup was canceled,
and reload confirms the unchanged Data Not Collected/public gist URL. No
privacy answer was saved or published. Continue only in the coordinated final
publication after the existing owner/live-deletion facts and User ID Analytics
purpose are resolved. This introduces no new audit or policy period.

Private browser facts are in `/private/tmp/mova-apple-metadata-20260928`:
`SUBSCRIPTION_DRAFT_READBACK.json`, `PRIVACY_PREPARATION_STATUS.json` and
`MAC_AVAILABILITY_UI_READBACK.json`. The protected capture folder now also has
saved Apple 0.2.1 draft, both subscription-copy and both U.S.-price screenshots.
Protected app review contact/login fields remain unchanged and are never copied
into these records.

## Running build 37 — launch blocker cleared

At 2026-09-29 04:33:31 UTC, the native owner verified the actual running and
controllable 37 welcome UI by binding the existing translocated bundle. The
former installed-path automation gap is cleared. No new build, archive/signing
pass, Mac availability check or further launch diagnosis is required for that
gap. That 04:33 readback was **signed out**; no sign-in, guest, Settings, deletion
or billing action was exercised in that earlier handoff.

Current proof:
`/private/tmp/mova-build37-testflight-20260928/CURRENT_RUNNING_MAC37_UI_ACCEPTANCE.json`.
The later authorized sign-in and native-owner changed Settings/Cancel handoff
are now complete. Current Store-offer and reviewer-access results are recorded
below; deletion/operator acceptance remains with its existing owners. The current U.S. prices stay $5.99/month and
$59.99/year; development captures remain unsuitable as final review images.
All saved Apple/core/subscription text remains unchanged, and final submission,
privacy publication, SITE publication and future feature work retain their
existing holds. That earlier launch correction did not control native UI; the later accepted
Store-offer/reviewer check is documented below.

## Accepted Settings, Store offers and reviewer login — September 29

The native owner completed the actual build-37 changed Settings and deletion
confirmation **Cancel-only** checks. They are closed and were not repeated by
this lane. Normal sign-in using the already supplied credentials is authorized;
the earlier human-only login dependency is superseded. Owner proof:
`/private/tmp/mova-build37-testflight-20260928/QA_ACCEPTANCE_BOUNDED_FINAL.json`.

This lane then used the accepted running Mac build **0.2.1 (37)**. The configured
dedicated App Review login successfully reached Dashboard. Loaded Settings shows
**Mova Pro inactive**, so authentication is verified but reviewer Pro access and
validity through the review window are not accepted. Existing credentials remain
unchanged; no password/account reset, purchase or restore occurred.

The real paywall opened for that reviewer session. Its Monthly offer shows
**$5.99/mo** and Annual shows **$59.99/year**, Only $4.99/mo and 17% OFF, matching
the authenticated U.S. App Store Connect prices. The initial annual-selected
capture is an unmodified **576 × 1090 RGB JPEG** from the iOS app running on Mac,
including its Mac window context. It is a truthful reference, not a processed
or Apple-accepted subscription review image. No price, content, aspect ratio or
pixel editing was performed. Monthly-selected capture and both review-image
replacements remain pending after computer control stopped responding.

The authenticated editable 0.2.1 page currently has **no selected build** and no
In-App Purchases and Subscriptions section. Both products remain Prepare for
Submission; their group says the first subscription group must accompany a new
app version. No causal reason for the absent attachment control is established.
Both first-review version attachments remain pending. Build selection and
Add for Review/Submit were not used to force the control to appear.

Private current evidence in `/private/tmp/mova-apple-metadata-20260928`:
`REVIEWER_ACCESS_READBACK.json`, `STORE_OFFER_READBACK.json` and
`FIRST_REVIEW_ATTACHMENT_INSPECTION.json`. The raw offer reference is
`/private/tmp/mova-worker3-release-pause-20260928T162834Z/mac37-yearly-review-reference.jpg`.
The last native session is the dedicated reviewer, with the paywall open;
it must not be assumed to be the earlier QA pilot session.

Saved Apple version/subscription text, review notes, protected credential fields
and the three accepted core screenshots remain unchanged. No privacy wizard or
closed source test/review was repeated. Final review submission, privacy/SITE
publication and future feature work retain their existing holds.

## October 2 policy and Apple review-prep readback

The SITE draft now distinguishes versions. The live 0.2.0 user who sees Archive Account is told that Archive retains account information and does not file a deletion request; that user can email support to request permanent deletion. The pending 0.2.1 in-app flow is conditional, and only an accepted in-app request is described as yielding a receipt, server deadline, manual seven-day target and completion notice. Privacy also acknowledges saved playlists alongside class plans. The effective date remains the September 28 draft until actual publication.

On October 2, App Store Connect still showed 0.2.0 Ready for Distribution, 0.2.1 Prepare for Submission, three core iPhone screenshots, and no 0.2.1 build selection. Privacy Policy URL `https://staysinmotion.com/privacy/` remained saved with an Edited marker; the public data label remained Data Not Collected. The Mova Pro group and both products remained Prepare for Submission; Apple says the first subscription group must accompany a new app version. The false reviewer-Pro assertion had already been removed from App Review Notes; reviewer Pro access remains unverified/inactive.

This local source preparation does not establish live deletion/fulfillment, the older version's full data matrix, a supported-size build-37 offer image, first-review attachment, or App Review readiness. Public SITE push/deployment, Apple privacy Publish, and App Review submission remain separate actions.
