# Mova 0.2.1 (37) — final submission action sheet

Updated 2026-09-29 04:13 UTC. App `6738900718`, bundle
`com.staysinmotion.mova`. Final App Review submission, public activation and SITE
publication remain held. Personal OpenAI account inspection is excluded and is
not a shipping blocker. Future Pilates/client work remains paused.

## Already completed

- Reviewed native source `6b9831b024d06ed4ff7c2625dfa31e12ffc35674`; clean review,
  76 focused tests and types/lint/format. Reuse these closed checks.
- One production 0.2.1/build 37 EAS build
  `3b993a78-9e45-4ee5-a027-78b73492166f`, IPA SHA-256
  `fd001826324c0fdddea06e30733df0ad64ae9b946eee1ba20282f9d3719402d1`.
- One TestFlight upload `cffb4d13-ee0f-40f2-beb6-1deb70a624c9` finished and Apple
  processing completed, reported by the native release owner. The single approved
  build/upload is complete; native launch/acceptance remains pending.
- Editable Apple version **0.2.1**: approved description, promotional text,
  What's New, keywords, support URL and review notes saved and read back exactly.
- Three core native 1320 × 2868 screenshots accepted and processed. Separate
  Preview RGB/no-alpha exports preserve every original RGB pixel. Their source
  is reviewed JavaScript in development client build 3, recorded truthfully.
- Both approved subscription descriptions and 288-character product notes saved
  and verified through authenticated App Store Connect; display names preserved.
  Current U.S. prices read without changes: $5.99/month and $59.99/year.
- Protected review contact and demo login fields remain present and unchanged.
  The existing public privacy URL/answers were preserved; no release choice
  was configured by this lane.

Private proof: `/private/tmp/mova-apple-metadata-20260928/APPLE_DRAFT_READBACK.json`
and `/private/tmp/mova-worker3-release-pause-20260928T162834Z/APPLE_UPLOAD_EXPORTS.json`.
The standard CLI metadata exports contain protected review information. Keep
them outside Git; do not paste their values into this sheet or a ticket.

## Remaining concrete preparation

1. **Accepted signed candidate.** Native release owner resolves the current
   launch failure and completes the approved Settings/deletion/paywall checks. Installation completed and on-disk identity is 37, but the user supplied
   Finder's unsupported-Mac dialog and launch acceptance is pending with the
   native owner. Do not treat on-disk identity as acceptance or substitute build 36.
   Runtime recovery `919352f6` now serves 100% with routing false, Gateway true,
   fallback false and working 0, reported by its owner. Reuse that readback and
   the release owners' actual deletion/operator acceptance; no new platform gate.
2. **Both production subscription offers.** After the native owner hands off
   the accepted Store app,
   inspect its paywall without purchase, restore or manage actions. Read monthly
   and yearly offers against the current U.S. App Store prices: **$5.99/month**
   and **$59.99/year**. Existing Test Store captures show $9.99/month and
   $79.99/year and differ from those Store prices. Preserve them as development
   references; final subscription review images require real matching Store offers.
   Replace each logo-only Review Information image with the matching
   real plan-selected screen. Leave optional 1024-pixel artwork unchanged.
3. **Protected reviewer access.** Use the existing dedicated Sign-In Information
   account, without printing or copying its credentials. It is distinct from
   the ENV QA fixtures. Confirm login and active Mova Pro through the intended
   review window on the accepted candidate; no purchase/reset/new account is
   authorized by this sheet. Existing configured credentials alone do not prove
   reviewer access. Align frozen review notes with accepted live behavior.
4. **Both first-review attachments.** In editable 0.2.1, attach both subscriptions
   to this version for their first review. Do not assume a product being present
   in the subscription group means it is attached to the version. Read back both
   identities in the version's In-App Purchases and Subscriptions section.
5. **Privacy and final policy link.** Use the nine-type matrix in
   [APPLE_METADATA.md](APPLE_METADATA.md), including purpose-specific Purchase
   History and User ID decisions. Reuse approved retention/fulfillment decisions
   and live upstream evidence. The old Data Not Collected/public policy answer
   remains unchanged. The observed initial browser setup ends with **Publish**;
   temporary setup was canceled and no answers were saved. Keep the local matrix
   until the existing final publication scope and owner facts are ready. After
   accepted native/backend/operator behavior and authorized SITE publication,
   use `https://staysinmotion.com/privacy`, the
   accurate effective date and the reviewed privacy answers. Publication is held.
6. **Final exact candidate.** Once acceptance is complete, select **0.2.1 (37)**
   in the 0.2.1 build selector and verify the version/build labels. Final build
   selection, release choice, Add for Review/Submit for Review and public release
   require the coordinator's final authorized rollout; do not execute them from
   this preparation sheet. SITE master remains unpushed.

The current Chrome App Store Connect session is authenticated; no new Apple
sign-in is needed for this packet. Both subscription copy/notes drafts are now
saved in addition to the unchanged text/review/core-image draft. Protected
credentials remain unchanged. Native acceptance, real matching offer images and
reviewer access remain pending. Privacy setup ends with Publish in the observed
flow, so no privacy answers were saved and public publication remains held.

## Exact subscription fields and identities

Group: `22171622`. Both plans offer Mova Pro and use the same approved
37-character description: **Unlock class building and management.**

| Plan    | Product ID            | Apple subscription ID | Display name    | Review image                  |
| ------- | --------------------- | --------------------- | --------------- | ----------------------------- |
| Monthly | `mova_pro_monthly_v1` | `6782429629`          | Mova Pro        | Actual monthly-selected offer |
| Yearly  | `mova_pro_yearly_v1`  | `6782433231`          | Mova Pro Yearly | Actual annual-selected offer  |

Use the exact optional product notes from [APPLE_METADATA.md](APPLE_METADATA.md).
Both existing review images were inspected and are logo-only. Review-image
replacement and first-review attachments remain pending. The approved
descriptions and optional product notes have now been saved through
the authenticated browser. App-level promotional text/core screenshots are
already saved.

## SITE publication boundary

Local source preparation: `78f2606b7947bf2ea5b7372ea3f8d654a5a60e1f`.
Prior handoff docs: `149f80b002e2ae379fcaf440faad0ad8881b2555`.
No push to master: its workflow deploys the site. Confirm the operator's seven-day
manual target and actual effective date at the authorized publication; seven days
is not a promise that every financial record, backup or provider log expires.
No source test/review, baseline HTTPS check, manifest audit or Xcode PDF gate
needs repeating for this sheet.

Private current proof: `SUBSCRIPTION_DRAFT_READBACK.json`,
`PRIVACY_PREPARATION_STATUS.json` and `MAC_AVAILABILITY_UI_READBACK.json` under
`/private/tmp/mova-apple-metadata-20260928`. Saved browser screenshots are in the
protected capture folder named in [RELEASE_HANDOFF.md](RELEASE_HANDOFF.md).
