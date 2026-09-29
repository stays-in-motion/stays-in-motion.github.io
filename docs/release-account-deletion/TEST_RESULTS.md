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
