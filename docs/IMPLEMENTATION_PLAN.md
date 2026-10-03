# Vericore Website Implementation Plan

## Phase 1 — Foundation — Complete

- Astro + TypeScript static site.
- Shared design tokens, responsive layout, focus states, and reduced-motion behavior.
- Reusable layout, navigation, footer, buttons, cards, code panels, evidence panels, and diagrams.
- GitHub Pages base path and production build.
- Pull-request CI and production deployment workflow.

## Phase 2 — Vericore 0.7.0 product alignment — Complete

- Homepage positioned around **Understand. Change. Verify.**
- Current 0.7.0 capabilities represented without roadmap claims.
- Repository, dependency, Git/evolution, impact, PR, architecture, context, Reality, evidence, planning, contracts, REST, MCP, and AI boundaries documented.
- Installation and current CLI workflows updated.
- Security/privacy page aligned with local-first behavior and current limitations.
- Release page aligned with the published v0.7.0 release.

## Phase 3 — Interactive proof — Complete

- Static interactive artifact explorer.
- Repository structure and dependency graph.
- Change impact.
- Grounded evidence.
- Engineering plan.
- Persisted Agent Change Contract and verification boundary.
- Engineering Reality state-boundary view.
- Explicit labeling that sample values are not live repository data.

## Phase 4 — Documentation and GitHub integration — Complete

- Authoritative Vericore documentation links.
- Current v0.7.0 release link.
- Repository, issue, security, and implementation-status links.
- Website specification updated to reflect the shipped product.

## Phase 5 — Verification and polish — Ongoing

- Type-check and production build on every pull request.
- Production route verification before deployment.
- Keep website claims synchronized with the Vericore repository when implementation changes.
- Continue accessibility, responsive, content-integrity, and visual regression improvements as the product evolves.

## Execution rule

Do not merge a phase until its CI checks pass. If a check fails, diagnose the root cause, fix it, and rerun the relevant verification. Do not mask failures or weaken checks merely to obtain a green build.

## Source-of-truth rule

When website copy and product behavior disagree, the implemented Vericore code, executable tests, public schemas, and authoritative documentation take precedence. The website must be corrected rather than used to redefine the product contract.
