# Responsive Site System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every Vericore Website page, shared component, interactive demo surface, and content block responsive from 320px mobile through very-wide desktop without unintended horizontal overflow or unusable controls.

**Architecture:** Establish a small responsive foundation in `BaseLayout.astro` and page-local styles, using fluid containers, CSS Grid/Flexbox, `clamp()`, intrinsic sizing, and a small set of semantic breakpoints. Keep product content unchanged unless a responsive layout requires copy wrapping or structural adaptation; do not add a framework or replace Astro's existing styling approach.

**Tech Stack:** Astro, TypeScript, CSS, existing static GitHub Pages build.

**Spec:** Approved in-chat responsive design on 2026-10-03: mobile 320–767px, tablet 768–1023px, desktop 1024–1439px, wide 1440px+; responsive navigation, stacked/adaptive layouts, scroll-safe tables/code, touch-sized controls, responsive diagrams/demo, no unintended horizontal overflow, and preservation of Vericore 0.7.0 content and identity.

## Global Constraints

- Preserve Vericore 0.7.0 product claims and visual identity.
- Do not add a UI framework or unnecessary runtime dependency.
- Do not solve responsiveness by hiding substantive content on mobile.
- Do not use fixed viewport widths for primary content layouts.
- Keep keyboard focus and touch targets usable at every breakpoint.
- Avoid page-level horizontal overflow; intentional table/code scrolling must be locally contained.
- Prefer shared responsive primitives in `BaseLayout.astro` over duplicated breakpoint hacks.
- Keep the existing static Astro/GitHub Pages architecture.

## Review Focus

- 320–375px narrow phones: navigation, long headings, buttons, code blocks, and cards must not clip or force page overflow.
- Interactive demo at touch widths: controls and panels must remain operable without hover-only interactions.
- Architecture/flow diagrams: labels must remain legible and contained at mobile/tablet widths.
- Long technical strings: commands, paths, URLs, hashes, and code must wrap or scroll locally without widening the page.
- Wide screens: content must remain readable and visually constrained rather than stretching into excessive line lengths.

---

### Task 1: Establish responsive foundation

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/index.astro` and other page styles only where shared primitives are insufficient

**Interfaces:**
- Produces shared container, spacing, typography, button, navigation, overflow, and focus behavior that pages can consume without new dependencies.

- [ ] Audit existing global CSS for fixed widths, viewport assumptions, overflow rules, and breakpoint duplication.
- [ ] Define semantic responsive tokens/utility classes for content width, page padding, section spacing, responsive type, and safe overflow.
- [ ] Make the header/navigation collapse into a touch-friendly mobile presentation while preserving all existing links.
- [ ] Make global buttons and interactive controls wrap/stack appropriately and maintain accessible focus states.
- [ ] Verify the foundation at 320, 375, 430, 768, 1024, 1280, 1440, and 1920px widths.

### Task 2: Make homepage responsive

**Files:**
- Modify: `src/pages/index.astro`

**Interfaces:**
- Consumes shared responsive foundation from Task 1.

- [ ] Audit hero, CTA group, capability cards, product-flow sections, evidence/contract visualizations, and footer composition.
- [ ] Convert multi-column sections to intrinsic grid/flex layouts that stack cleanly on narrow widths.
- [ ] Ensure technical diagrams and long code/content blocks use local containment rather than page overflow.
- [ ] Tune typography and spacing with fluid values so headings do not collide or become oversized.
- [ ] Verify narrow mobile, tablet, desktop, and wide layouts.

### Task 3: Make capabilities and architecture pages responsive

**Files:**
- Modify: `src/pages/capabilities.astro`
- Modify: `src/pages/architecture.astro`

**Interfaces:**
- Consumes shared responsive foundation from Task 1.

- [ ] Make capability cards and metadata layouts adapt from one to multiple columns based on available width.
- [ ] Make architecture pipeline/diagram sections readable on mobile without relying on tiny text.
- [ ] Contain long technical identifiers and code samples.
- [ ] Preserve all capability and architecture content.
- [ ] Verify at narrow phone and tablet widths specifically.

### Task 4: Make interactive demo fully responsive

**Files:**
- Modify: `src/pages/demo.astro`
- Modify: `src/data/demo.ts` only if responsive presentation needs structured display metadata

**Interfaces:**
- Preserves existing demo data and interaction model.

- [ ] Audit every demo state, tab/control, panel, evidence view, Engineering Reality view, and Agent Change Contract view.
- [ ] Reflow dashboard-like regions into vertical stacks on narrow screens.
- [ ] Ensure controls have touch-safe dimensions and visible focus states.
- [ ] Make code/evidence panes locally scrollable where content cannot reasonably wrap.
- [ ] Ensure no interaction depends exclusively on hover.
- [ ] Verify every demo state at 320–768px and desktop widths.

### Task 5: Make documentation, how-to-use, releases, security, and 404 responsive

**Files:**
- Modify: `src/pages/docs.astro`
- Modify: `src/pages/how-to-use.astro`
- Modify: `src/pages/releases.astro`
- Modify: `src/pages/security.astro`
- Modify: `src/pages/404.astro`

**Interfaces:**
- Consumes shared responsive foundation.

- [ ] Make documentation cards/link groups stack naturally.
- [ ] Make CLI command blocks wrap or locally scroll without page overflow.
- [ ] Make release metadata and download/link groups usable on touch widths.
- [ ] Make security/trust-boundary content readable at mobile widths.
- [ ] Make the 404 page and CTA layout responsive.
- [ ] Verify all pages at narrow mobile and tablet widths.

### Task 6: Responsive quality audit and automated safeguards

**Files:**
- Modify: `scripts/verify-routes.mjs` if useful for static responsive/content assertions
- Modify: `.github/workflows/ci.yml` only if an automated responsive safeguard can run reliably without adding a browser dependency
- Modify: `docs/WEBSITE_SPEC.md` only to document the responsive baseline

**Interfaces:**
- Produces repeatable CI/build verification for the responsive baseline where practical.

- [ ] Run the existing type-check and production build.
- [ ] Run route verification against the built site.
- [ ] Audit generated HTML/CSS for unintended legacy fixed-width patterns and accidental horizontal overflow sources.
- [ ] If a lightweight static safeguard is reliable, add it to CI; otherwise document the manual viewport matrix instead of adding brittle automation.
- [ ] Perform a final viewport matrix review across 320, 375, 430, 768, 1024, 1280, 1440, and 1920px.
- [ ] Verify keyboard navigation and visible focus across the shared navigation and interactive demo controls.
- [ ] Confirm no substantive Vericore 0.7.0 content was removed during responsive work.
- [ ] Commit the completed responsive pass and open a PR for review.
