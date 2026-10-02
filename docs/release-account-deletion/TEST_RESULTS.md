# SITE account-deletion copy verification

Date: September 28, 2026. Original SITE checkout on `master`, starting clean at
`22e3914` (`docs(site): record authorized publication progress`). Scope is the
SITE copy/draft only; no native/backend/root source was changed.

## Results

| Check                                               | Result                                                                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Focused Privacy/Support/Terms tests after JSX edits | PASS: 22 tests, 3 files, 83 assertions                                                                                   |
| Full SITE suite after review correction             | PASS: 113 tests, 8 files, 330 assertions                                                                                 |
| `bun run type-check`                                | PASS: zero TypeScript errors                                                                                             |
| `bun run verify:release-site`                       | PASS: production build and all three direct-route canonicals; current deletion copy present; retired instructions absent |
| Touched-file Prettier and `git diff --check`        | PASS: touched source and Markdown files formatted and checked; diff check clean                                          |
| Lint                                                | Not configured: no lint script or ESLint configuration in this SITE project; no lint result is claimed                   |

The focused tests activate Account Help before inspecting its conditional
content. Existing tests import the same shared copy as implementation. The added Privacy Policy help link has a shared, deterministic accessibility
label. No type suppression, `any` type, dependency,
migration, production action or live deletion is introduced.

## Scoped independent review

A small Sol helper reviewed only the SITE diff against the shared contract and
actual native handoff. Two findings were corrected:

1. The retired-support-form scanner could reject a negative assertion in a test.
   Production-copy scans now exclude test files. The passing release verifier
   confirms it accepts the valid negative assertion.
2. Receipt display/sign-out order was overstated. Shared wording is now sequence
   neutral: an accepted request yields a receipt and sign-out. Pending receipt is
   never described as completed deletion.

Final source review also gave the added support privacy link a shared accessible
label and clarified RevenueCat subscription/purchase reporting. These changes
were included in the final focused and full SITE verification.

The reviewer found the remaining request/target/billing/retention/Archive facts
aligned with the contract. Root reduced source-code string coupling in the
verifier; actual rendered section tests and built-output checks cover copy.

## Initial Apple preparation and screenshot evidence

The exact field draft is [APPLE_METADATA.md](APPLE_METADATA.md). Every field fits
its stated Apple length limit. Both subscription review images were inspected
visually and are present but logo-only; they need real offer-screen replacements.
The existing marketing images depict the retired converter.

Three original current build-36 iOS-on-Mac visual references were captured,
identity-bound to 0.2.1/36 and the known installed JS hash. They are 576 × 1090
JPEG window images, with Mac chrome, and do not qualify as final iPhone assets.
No images were edited or stretched. Evidence remains in the protected temporary
folder recorded in the field draft, outside Git. Apple save/upload/submission
and final build selection were not performed.

A read-only attempt to inspect an existing saved class reached its loading view;
subsequent native-window capture failed, including a fresh exact-app binding.
No generated-class image was captured. This is a capture limitation, not a new
baseline runtime finding; the already-closed generation evidence is retained.
No account/entitlement was changed and no paid generation was started.

## Public acceptance remains separate

These checks verify local SITE source/build behavior. They do not establish live
request/fulfillment operations, provider or mailbox erasure/retention, a signed
native replacement, App Review account access on that replacement, or publication.
Confirm the provisional seven-day operational target and actual effective date
at the authorized rollout. Keep the existing HTTPS acceptance closed.

## Closeout

Final touched-file Prettier and diff checks passed. Markdown is intentionally
ignored by the project's normal formatter; the changed release documents were
explicitly formatted and checked with `--ignore-path /dev/null` before commit.
The installed RTK wrapper did not support its advertised `test`/`proxy` commands;
those attempts did not run tests. All results above come from successful direct
Bun commands with fail-fast shell execution.

Local commit `78f2606b7947bf2ea5b7372ea3f8d654a5a60e1f` completed the planned SITE source preparation. Preserve
the prior local commit and keep `master` unpushed until the accepted replacement
and exact publication rollout are authorized.

## Earlier docs-only screenshot and build-37 closeout

The original source verification above is unchanged and reused. This follow-up
changes only release Markdown. Actual native 6.9-inch core/paywall/consent exports,
source and development-client/Test Store provenance, finished build-37 identity,
the refreshed specific Gateway settings and exact remaining inputs are recorded
in [RELEASE_HANDOFF.md](RELEASE_HANDOFF.md) and the field draft. All seven native
PNGs were inspected for dimensions/hash/alpha; all are 1320 × 2868 and fully
opaque. Core builder/options and both plan selections were visually inspected.
The free-account consent was canceled and the signed-in Settings state remained.
Free and Pro QA accounts both had empty saved-class lists; no inference occurred.
A generated marketing image is optional and is not an acceptance gate.

No source tests/review or baseline audit was repeated. No Apple changes, upload,
publication, provider setting change, backend deployment or live deletion was
performed. Docs-only Prettier and `git diff --check` passed. All five exact Apple field
lengths were rechecked against their declared counts and limits: 121/170,
1023/4000, 367/4000, 77/100 and 2864/4000. SITE master must remain unpushed.

## Editable Apple draft save and readback

The source tests and clean native review above remain closed; no app source or
new release test gate was added. Three native Preview PNG exports were checked
read-only for RGB/no-alpha format, 1320 × 2868 dimensions and exact decoded RGB
pixel equality with their untouched originals. `APPLE_UPLOAD_EXPORTS.json`
records both hashes and each source/export pairing outside Git.

Corrected standard EAS metadata lint returned no findings. The initial
`APP_IPHONE_69` screenshot slot failed with an Apple API enum error after saving
the text/review draft. The corrected `APP_IPHONE_67` push saved the same fields
and processed all three uploads successfully. A subsequent normal pull at
2026-09-29 02:45 UTC read back version 0.2.1, all five exact field strings,
exact App Review notes, every protected contact/demo-login field unchanged,
and the three-image set. Existing privacy-policy URL remained unchanged.
The isolated CLI exports remain private and contain no new credentials.

The native release owner reports one finished TestFlight upload and completed
Apple processing. Same-build installation recovery remains stalled at installed
build 36; signed-37 UI, protected reviewer access and production paywall
correspondence are pending. Neither final review submission, privacy publication,
SITE push, purchase nor inference was performed by this lane. Touched Markdown
Prettier, all frozen field-block equality and whitespace checks passed. The five
field lengths remain 121/170, 1023/4000, 367/4000, 77/100 and 2864/4000. These
are the only local checks for this docs-only save follow-up.

## Authenticated subscription preparation readback

Normal App Store Connect authentication is confirmed. Both subscriptions remain
Prepare for Submission; the exact approved 37-character description and
288-character product notes were saved and read back for monthly `6782429629`
and annual `6782433231`, preserving their display names. Current U.S. prices
read from their normal pricing controls are $5.99/month and $59.99/year. They
have not been changed and differ from the $9.99/$79.99 Test Store references.
Both saved descriptions and both price tables have private browser screenshots.

The existing nine-type privacy wizard's initial Email Address setup ends with
Publish. The unfinished wizard/type selection was canceled, then reload confirmed
Data Not Collected, Published a year ago and the unchanged legacy policy URL.
No privacy answers were saved or published. The local reviewed matrix and same
owner-purpose/retention inputs remain ready for the coordinated final scope.

Native owner readback now reports actual installed 37; the user supplied an
unsupported-Mac launch dialog, so signed-app acceptance is pending. The current
0.2.1 Apple draft UI provides no explicit Mac-availability flag or 37-versus-36
comparison. Runtime owner reports recovery `919352f6` serving 100%, routing
false, Gateway true, fallback false, working 0 and zero paid spend. These owner
reports do not claim deletion/operator or reviewer-access acceptance by this lane.

Only scoped release Markdown is updated. All frozen field blocks remain unchanged;
scoped Prettier and whitespace checks passed. No closed source tests/review,
baseline runtime check, privacy audit, new build, purchase, inference, final
submission or public publication is introduced.

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

## October 2 version-aware copy follow-up

The local source now explains the different account controls in the distributed 0.2.0 app and pending 0.2.1 release. The change was reviewed against the visible 0.2.0/0.2.1 App Store Connect version states and the saved deletion contract. It does not make the draft policy public. The displayed September 28 effective date remains a draft and must be changed to the actual Chicago publication date before deployment.

Scoped Prettier and `git diff --check` pass. `bun run verify:release-site` passes after the verifier was adjusted for the runtime-interpolated support email; it builds the site and checks all three direct routes and required copy. The focused Support section test and `bun run type-check` were each attempted with a 30-second bound, stalled without a result, and exited 124. They are **not** reported as passing for this follow-up. The prior 113-test full-suite and type-check pass apply to the earlier source only. No configured lint script exists.

Authenticated App Store Connect readback on October 2 confirms 0.2.0 Ready for Distribution and 0.2.1 Prepare for Submission, and the processed 0.2.1/build 37 was then selected, saved, and verified after reload (Apple build ID `de5c4e55-c527-416d-b15d-9180b4cf3265`). The saved Privacy Policy URL is `https://staysinmotion.com/privacy/` with an Edited marker, while the public preview still says Data Not Collected. Monthly and Yearly remain Prepare for Submission. No public SITE push, Apple privacy Publish, subscription Add for Review, app Add for Review, purchase, or account deletion was performed.
