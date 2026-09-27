# Mova release-site publish and domain packet

Date: 2026-09-27

This packet records the release-site candidate, current hosting fault, exact
external changes needed to publish it, verification, and rollback. No publish,
GitHub Pages setting, DNS, or App Store mutation was performed while preparing
this packet.

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
