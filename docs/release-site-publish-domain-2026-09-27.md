# Mova release-site publish and domain packet

Date: 2026-09-27

## Execution update

The site publication and authoritative DNS cutover were subsequently authorized
and executed:

- `master` was pushed through packet commit
  `9cfcdb0313f0e3fd0e10aae71c8b0c94224ab6a2`.
- GitHub Pages workflow run `36349597329` completed successfully.
- `https://stays-in-motion.github.io/`, `/privacy/`, and `/terms/` each returned
  HTTP 200 with the expected page titles.
- The GitHub Pages custom domain is now `staysinmotion.com`.
- At approximately 2026-09-27 21:20 UTC, Namecheap host records were changed
  from the obsolete apex A record `34.111.179.208` to GitHub Pages' four apex A
  records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and
  `185.199.111.153`.
- `www CNAME stays-in-motion.github.io.` was added. All new records use
  Namecheap's `Automatic` TTL; the authoritative answers reported a 1,800
  second TTL.
- Existing SPF, DMARC, DKIM, mail-forwarding, nameserver, and unrelated records
  were preserved unchanged. No wildcard record was added.
- Both authoritative Namecheap servers returned exactly the four new apex A
  records, and the authoritative `www` answer returned the new CNAME. Cloudflare
  `1.1.1.1` and Google `8.8.8.8` also returned the new records immediately.
- The workstation's default recursive resolver still returned the cached old
  apex address during the first post-cutover check. This is expected propagation
  lag within the prior TTL, not an authoritative DNS mismatch. A later bounded
  `dig` check returned the new apex records and `www` CNAME, although the client
  path used by `curl` still could not resolve `www` during that same check.
- GitHub Pages remained `built` with `cname: staysinmotion.com`, but
  `https_enforced` was still `false`. Direct TLS verification against a GitHub
  Pages edge failed because the custom-domain certificate had not yet been
  issued.
- A diagnostic request pinned to the GitHub Pages edge (certificate checking
  bypassed only for this content check) returned the expected deployed pages
  and canonical URLs for `/`, `/privacy/`, and `/terms/`. The `www` edge issued
  the expected 301 redirect to `https://staysinmotion.com/`; following it via
  the workstation resolver still reached the cached obsolete destination.

The remaining work is propagation-dependent: allow remaining client caches to
expire and wait for GitHub certificate issuance, then verify normal trusted
HTTPS for all three canonical routes, the `www` redirect, and Pages HTTPS
enforcement. No further repository push or GitHub Pages custom-domain mutation
is needed.

The original preparation record follows for audit context.

## Candidate

- Repository: `stays-in-motion/stays-in-motion.github.io`
- Branch: `master`
- Candidate commit: `1635063` (`feat(site): add canonical legal and support routes`)
- Local branch position at preparation: two commits ahead of `origin/master`
- Intended canonical origin: `https://staysinmotion.com`
- Required direct-load routes:
  - `/`
  - `/privacy/`
  - `/terms/`
- Support channel: `mailto:support@staysinmotion.com`
- The site terms refer to Apple's Standard EULA rather than claiming a custom
  application license.

## Local acceptance evidence

- `bun test --isolate`: 113 tests passed across eight files.
- `bun run type-check`: passed.
- `bun run verify:release-site`: passed. It builds all three routes, verifies
  their canonical links, and rejects retired Google Form references in source
  or output.
- Prettier check and `git diff --check`: passed.
- A local static server returned HTTP 200 for `/`, `/privacy/`, and `/terms/`.

## Current hosted state and 404 cause

Read-only checks on 2026-09-27 established:

- The repository's GitHub Pages configuration is public, built by a workflow
  from `master`, and has HTTPS enforcement enabled.
- GitHub Pages has no custom domain configured (`cname: null`).
- The default Pages origin is `https://stays-in-motion.github.io/`.
- The default origin currently returns 200 for `/` and 404 for `/privacy/` and
  `/terms/` because the candidate commits have not been pushed/deployed.
- `staysinmotion.com` resolves to `34.111.179.208`.
- `https://staysinmotion.com/` returns HTTP 404 through Google and serves a
  Replit page saying the app is not live.
- `www.staysinmotion.com` did not resolve during the check.

The public failure therefore has two independent causes: the release-site
candidate is not on `origin/master`, and the apex domain still targets the
stopped Replit deployment rather than GitHub Pages.

## External approval requested

Approve this exact sequence:

1. Push local `master` through candidate `1635063` to `origin/master`. This
   triggers the existing GitHub Pages workflow.
2. Wait for that workflow to finish and verify the default Pages origin returns
   200 with the expected content and canonical URLs at all three routes.
3. In the GitHub repository's Pages settings, set the custom domain to
   `staysinmotion.com`.
4. At the authoritative DNS provider, capture the current records and TTL, then
   replace the obsolete apex A record `34.111.179.208` with GitHub's current
   documented apex A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. If `www` should work, add `www CNAME stays-in-motion.github.io.`. Do not add
   wildcard DNS records.
6. After DNS propagation and certificate issuance, confirm GitHub Pages HTTPS
   enforcement and verify the apex and optional `www` redirect behavior.

Before applying DNS, re-read GitHub's current custom-domain documentation and
confirm the published destination records have not changed:
<https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site>

## Verification after publication

Run and record:

```sh
dig staysinmotion.com +noall +answer -t A
dig www.staysinmotion.com +noall +answer -t CNAME

curl -fsS -o /dev/null -w '%{http_code}\n' https://staysinmotion.com/
curl -fsS -o /dev/null -w '%{http_code}\n' https://staysinmotion.com/privacy/
curl -fsS -o /dev/null -w '%{http_code}\n' https://staysinmotion.com/terms/

curl -fsS https://staysinmotion.com/ | grep -F 'https://staysinmotion.com/'
curl -fsS https://staysinmotion.com/privacy/ | grep -F 'https://staysinmotion.com/privacy/'
curl -fsS https://staysinmotion.com/terms/ | grep -F 'https://staysinmotion.com/terms/'
```

Also verify that the support email opens correctly and that no live page links
to the retired Google Form.

## Rollback

Prefer content rollback over restoring the broken Replit target:

1. If the new content is faulty, revert candidate commit `1635063`, push the
   revert, and let the Pages workflow redeploy while leaving the working domain
   on GitHub Pages.
2. If custom-domain or certificate configuration is faulty, remove the custom
   domain from GitHub Pages and restore the exact captured pre-change DNS
   records and TTL.
3. The mechanical DNS rollback target is the prior apex A record
   `34.111.179.208`, but that restores the currently observed Replit 404 and is
   not a functional product rollback.
4. Re-run the hosted verification commands after any rollback.

Do not use the historical GitHub Pages artifact as a release fallback: it lacks
the direct-load privacy and terms routes needed for App Store review.

## September 28 account-deletion preparation

The propagation/certificate wait described above is historical and now resolved.
The closed trusted readback confirms HTTPS enforcement, approved apex/www
certificate, 200 responses on canonical `/`, `/privacy/` and `/terms/`, and
HTTPS-preserving redirect chains from www, HTTP apex and the default GitHub
origin. No repeat domain/DNS mutation or publication was performed for this
copy change.

New deletion wording is prepared locally in Privacy, Account Help and Terms.
It describes the in-app authenticated request, pending server receipt,
seven-day manual fulfillment target, email confirmation, independent Apple
subscription cancellation, retained financial/accounting records and historical
Archive distinction. The obsolete support-form mention is removed. The site
shares request/receipt/billing strings rather than duplicating them.

This preparation is not public acceptance. Native's deletion delta is locally
verified and awaiting the single combined review; installed build 36 still has
Archive. Publish only after the deployed endpoint, operator completion and exact
replacement signed artifact are accepted, the operational target/effective date
are confirmed, and the exact rollout is authorized. A push to `master` runs the
existing Pages workflow, so this source change is committed locally only.

[Exact Apple field draft](release-account-deletion/APPLE_METADATA.md) contains
field lengths, actual native review instructions, corrected RevenueCat privacy
purposes, both logo-only subscription review-image findings, and current
identity-bound iOS-on-Mac reference capture paths. These references are not final
iPhone upload assets. Provider/mailbox/backup retention and retained-accounting
periods remain explicit owner facts; no erasure guarantee is invented.

[Local verification and review](release-account-deletion/TEST_RESULTS.md) records
113 SITE tests across eight files, focused section checks, types and release-site
build verification. The original local publication-progress commit `22e3914` is
preserved. No Apple field save, screenshot upload, build selection, submission,
purchase, provider generation, backend/native change, paid build or SITE push
is part of this preparation. All future Pilates remains paused.

## September 28 Apple packet closeout

The local deletion-copy source remains `78f2606b7947bf2ea5b7372ea3f8d654a5a60e1f`.
The docs-only follow-up binds exact Apple text and real native iPhone captures
to reviewed native `6b9831b024d06ed4ff7c2625dfa31e12ffc35674` and the separately
finished production 0.2.1/build 37 archive. Screenshots are correctly labeled
development client / RevenueCat Test Store; signed-37 installed acceptance and
production price correspondence remain pending. Specific Gateway retention was
read live; OpenAI account sign-in/control work is excluded by the user and is not a
shipping blocker; actual primary-provider disclosure and owner-defined retention
handling remain with their assigned release lanes. The complete paths and narrow release inputs are in
[RELEASE_HANDOFF.md](release-account-deletion/RELEASE_HANDOFF.md).
No Apple field, privacy publication, SITE push or backend rollout occurred here.
The prior public-site/domain evidence remains closed and is not re-audited.
