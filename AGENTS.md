# Site Agent Guidelines

Applies to `stays-in-motion-site/`.

## Toolchain
- Formatter: Prettier
- Types: (if TS) regular `tsc --noEmit` triggered by build scripts
- Lint: `eslint` (if configured)

## Principles
- Keep UI components pure & side-effect free.
- Reuse utility functions; avoid duplication across site and native.

## Checklist (Site Change)
- [ ] Format clean (`bun run format` or Prettier)
- [ ] Type check / build passes (`bun run build`)
- [ ] Lint clean (`bun run lint`)
- [ ] No duplicated utilities (prefer shared extraction)
- [ ] Tests pass if applicable (`bun test`)
- [ ] No new `any` types - use proper interfaces
