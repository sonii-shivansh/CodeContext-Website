# Vericore Website Specification

## Purpose

Create a fast, accessible, evidence-oriented public website for **Vericore 0.7.0**. The website explains and demonstrates capabilities that are actually implemented in the Vericore repository.

## Product positioning

Vericore is evidence-grounded engineering intelligence for understanding repositories, dependencies, Git evolution, changes, pull requests, architecture, repository state, grounded evidence, Q&A, planning, governance, and verified engineering changes.

Core message:

> **Understand. Change. Verify.**

Core trust model:

> **Deterministic evidence first. Optional AI reasoning second.**

The website must not publish unreleased product strategy, private roadmap ideas, or claims about functionality that is not implemented.

## Current 0.7.0 surface

The public site should accurately represent these shipped areas:

- Java/Kotlin repository intelligence;
- dependency graphs, cycles, PageRank hotspots, and learning paths;
- Git and evolution intelligence;
- change-impact and PR Intelligence;
- Architecture Intelligence, drift, contracts, and decision records;
- Engineering Context and Engineering Reality;
- grounded evidence and repository Q&A;
- deterministic engineering planning;
- Agent Change Contracts and `prepare → change → verify`;
- provenance and machine-readable artifacts;
- local REST and MCP stdio integrations;
- optional Gemini/Anthropic assistance over bounded repository-derived context;
- cross-platform release verification.

Current limitations must remain visible where relevant: Java/Kotlin focus, known Kotlin complex-syntax limits, read-only planner, trusted local REST/MCP boundaries, no autonomous source modification, and no deployment-grade authentication/tenant isolation.

## Technology

- Astro
- TypeScript
- Static-first architecture
- GitHub Pages
- GitHub Actions for CI and deployment

## Information architecture

- Home
- Capabilities
- Architecture
- Interactive Demo
- How to Use
- Documentation
- Releases
- Security & Privacy

## UX principles

1. Demonstrate before explaining.
2. Prefer real Vericore outputs and repository-derived examples over marketing claims.
3. Keep interactions keyboard accessible.
4. Respect reduced-motion preferences.
5. Use restrained motion and a technical visual language.
6. Mobile-first responsive behavior.
7. Fast initial page load and minimal client-side JavaScript.
8. Clearly distinguish sample/static data from live repository analysis.

## Visual direction

Dark engineering-infrastructure aesthetic with subtle graph/grid motifs, readable typography, terminal-style evidence panels, dependency/architecture diagrams, and restrained animation. Avoid generic AI imagery, excessive gradients, stock imagery, or copied visual identities.

## Interactive demo

GitHub Pages is static. The demo therefore uses committed sample artifacts rather than pretending to run a backend in the browser. It should expose repository structure, change impact, evidence, planning, the persisted Agent Change Contract, and Engineering Reality. Every sample must be clearly labeled as demonstration data.

## Documentation integration

Link to authoritative Vericore documentation. The Vericore repository is the source of truth for implementation behavior, schemas, contracts, and limitations. Website copy must not contradict the repository.

## GitHub integration

The site links to the canonical Vericore repository, v0.7.0 release, issues, security policy, and authoritative documentation. Release details should remain consistent with GitHub release artifacts.

## Accessibility

Target WCAG 2.2 AA practices where practical: semantic landmarks, keyboard navigation, visible focus, sufficient contrast, labels for controls, reduced motion, accessible diagrams, and no information conveyed by color alone.

## Performance

Prefer static HTML, optimized assets, minimal JavaScript, lazy-loaded non-critical visuals, and no unnecessary third-party runtime dependencies.

## SEO

Provide page titles, descriptions, canonical URLs, Open Graph metadata, sitemap, robots.txt, and structured metadata where appropriate.

## CI/CD

Every pull request must type-check and build the site. Production deployment must run the same validation and route verification before publishing to GitHub Pages.

## Non-goals

- No backend service for the static website.
- No fake live repository analysis.
- No future roadmap or confidential product strategy presented as shipped behavior.
- No collection of unnecessary visitor data.
- No external runtime dependency unless documented and justified.
