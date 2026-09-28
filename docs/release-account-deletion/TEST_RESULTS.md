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

## Apple preparation and screenshot evidence

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

One scoped local commit completes the planned SITE source preparation. Preserve
the prior local commit and keep `master` unpushed until the accepted replacement
and exact publication rollout are authorized.
