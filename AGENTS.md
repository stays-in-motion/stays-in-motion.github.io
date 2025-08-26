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
- [ ] Format clean
- [ ] Type check / build passes
- [ ] Lint clean
- [ ] No duplicated utilities (prefer shared extraction)
