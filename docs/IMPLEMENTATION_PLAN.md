# Vericore Website Implementation Plan

## Phase 1 — Foundation

- Initialize Astro + TypeScript.
- Establish design tokens, typography, spacing, responsive breakpoints, focus states, and reduced-motion behavior.
- Add reusable layout, navigation, footer, buttons, cards, code panels, evidence panels, and diagram primitives.
- Configure GitHub Pages base path and production build.
- Add pull-request CI and production deployment workflow.

## Phase 2 — Product site

- Build homepage using only verified current Vericore capabilities.
- Add capability pages/sections for repository, dependency, change, PR, architecture, grounded evidence, Q&A, and engineering planning.
- Add architecture and workflow explanations.
- Add installation and quick-start examples.
- Add security/privacy and community links.

## Phase 3 — Interactive proof

- Generate or curate committed sample analysis artifacts from Vericore.
- Build a static interactive artifact explorer.
- Visualize repository structure, dependency graph, change impact, evidence references, and planner output.
- Provide accessible text equivalents for graph visualizations.

## Phase 4 — Documentation and GitHub integration

- Link to authoritative Vericore documentation.
- Add release information sourced from GitHub where practical.
- Add repository, issues, contribution, and release links.
- Add website link to Vericore README after the website is production-ready.

## Phase 5 — Verification and polish

- Type-check and lint.
- Production build.
- Link validation.
- Accessibility checks.
- Responsive/mobile checks through automated tooling where available.
- Verify GitHub Pages artifact and deployment.
- Optimize asset sizes and client JavaScript.

## Execution rule

Do not merge a phase until its CI checks pass. If a check fails, diagnose the root cause, fix it, and rerun the relevant verification. Do not mask failures or weaken checks merely to obtain a green build.
