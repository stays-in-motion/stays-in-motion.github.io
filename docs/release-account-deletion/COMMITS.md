# SITE account-deletion release copy

Prepared September 28, 2026. Scope: original SITE repository only, following
coordinator-authorized current-release preparation. Future Pilates is paused.

## Resolved source context

The shared release account-deletion contract lives in
`/Users/jameswatts/.codex/worktrees/release-build36/mova-workspace/SCRATCHPAD/release-account-deletion/COMMITS.md`.
The native Settings implementation is reviewed at
`6b9831b024d06ed4ff7c2625dfa31e12ffc35674`. Production build 37 is finished with
bounded static archive verification; installed and live deletion acceptance remain
pending. The deletion flow is not in historical build 36.

Authenticated users request deletion in Settings without Pro or cancellation.
An accepted server receipt records the original request/deadline; the app then
clears owned state and signs out. The seven-day manual fulfillment window is
provisional operational policy. Completion is confirmed by email. Financial,
cost and UUID accounting correlation remain; historical Archive is retention,
not a deletion request. No provider or mailbox retention period is invented.

## Commit plan

One commit: `feat(site): prepare account deletion release copy`

- Centralize shared request/receipt/billing wording for Privacy and Support.
- Update Privacy, Account Help and Terms to describe initiation, pending receipt,
  server deadline, seven-day target, completion email and retained accounting.
- Remove the obsolete linked-support-form wording.
- Extend the existing three focused section tests and release-site verifier.
- Record exact Apple field text, screenshot findings and privacy corrections in
  local release docs without credentials or account-specific private content.
- Append a dated preparation record to the existing publication packet;
  preserve historical publication/domain evidence.
- Format touched files; run focused tests first, then SITE types, complete tests,
  build/release verification and diff checks. No configured lint script exists.

## Publication boundary

Commit locally only. Do not push master: the existing workflow publishes it.
Before publication, the release owner must accept the deployed request endpoint,
operator fulfillment and replacement signed native artifact, confirm the
operational seven-day target and final effective date, and authorize the exact
rollout. App Review submission/build selection, privacy-label publication,
purchases and paid builds remain held. Build 36 evidence is reused; no new
baseline audit or Xcode PDF gate is introduced.

## Docs-only closeout follow-up

One local commit: `docs(site): bind Apple handoff to build 37 and native captures`

- Pin reviewed native source and the finished production build 37 archive.
- Record native iPhone screenshot paths, source, development-client artifact and
  RevenueCat Test Store mode; distinguish actual offer prices from unverified
  App Store correspondence. Preserve originals outside Git.
- Record the free-account consent/Cancel observation and empty QA class lists.
  A generated-class marketing image is optional and introduces no release gate.
- Refresh only the specific Gateway retention readback and actual-provider disclosure and
  owner policy inputs; do not invent a universal erasure period.
- Add a compact handoff with exact next actions and update the prior evidence
  record. Format and check only changed Markdown and whitespace; reuse closed
  source verification. No app-source change, test rerun, push or publication.

The user's subsequent approval excludes OpenAI account sign-in/control work;
it is not a shipping blocker. Runtime ownership resolves primary provider/billing
separately from fallback. The coordinator owns approved rollout/upload operations;
this commit remains local Apple/SITE Markdown preparation only.

## Apple editable-draft save follow-up

One local commit: `docs(site): record saved Apple 0.2.1 draft and submission steps`

- Record the standard EAS managed-auth metadata save and exact readback of the
  approved 0.2.1 fields, preserving existing protected review account/contact data.
- Record three accepted screenshot uploads and native Preview RGB exports with
  unchanged dimensions and decoded pixels; preserve original RGBA files outside Git.
- Refresh build-37 upload/processing status while leaving signed installation and
  production paywall acceptance pending with the native release owner.
- Add a final submission action sheet with both subscription IDs, protected review
  access checks, privacy publication and exact build selection still separated from
  the editable draft operations already completed. Personal OpenAI account work
  remains excluded.
- Format and check only changed Markdown, verify frozen field blocks stayed exact,
  commit locally and do not push. Reuse closed source tests and review.
