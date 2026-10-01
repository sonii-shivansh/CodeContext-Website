# CodeContext Website Specification

## Purpose

Create a fast, accessible, evidence-oriented public website for CodeContext. The website must explain and demonstrate the capabilities that are actually implemented in the CodeContext repository.

## Product positioning

CodeContext is an evidence-driven engineering intelligence platform for understanding repositories, dependencies, changes, pull requests, architecture, grounded evidence, repository Q&A, and engineering planning.

The website must not publish unreleased product strategy, private roadmap ideas, or claims about functionality that is not implemented.

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
- Documentation
- Releases
- Security & Privacy
- Community / Contributing

## UX principles

1. Demonstrate before explaining.
2. Prefer real CodeContext outputs and repository-derived examples over marketing claims.
3. Keep interactions keyboard accessible.
4. Respect reduced-motion preferences.
5. Use restrained motion and a technical visual language.
6. Mobile-first responsive behavior.
7. Fast initial page load and minimal client-side JavaScript.

## Visual direction

Dark engineering-infrastructure aesthetic with subtle graph/grid motifs, readable typography, terminal-style evidence panels, dependency/architecture diagrams, and restrained animation. Avoid generic AI imagery, excessive gradients, stock imagery, or copied visual identities.

## Homepage sections

- Hero and primary actions
- Product proof / terminal snapshot
- Current capabilities
- How CodeContext works
- Evidence and grounding explanation
- Interactive repository intelligence demo
- Architecture overview
- Installation / quick start
- Trust, security, privacy and CI signals
- GitHub / documentation / releases calls to action

## Interactive demo

The GitHub Pages site is static. The demo therefore uses committed, generated sample CodeContext artifacts rather than pretending to run a backend in the browser. The artifact viewer should expose repository structure, dependency relationships, change impact, evidence references, and engineering-plan output where those artifacts exist.

## Documentation integration

The website should link to authoritative CodeContext documentation and, where practical, build documentation from the repository rather than maintaining contradictory copies. Current implementation is the source of truth.

## GitHub integration

The site should link to the main CodeContext repository, releases, issues, discussions where available, and contribution documentation. Release information should be derived from GitHub during build where practical.

## Accessibility

Target WCAG 2.2 AA practices where practical: semantic landmarks, keyboard navigation, visible focus, sufficient contrast, labels for controls, alt text, reduced motion, accessible diagrams, and no information conveyed by color alone.

## Performance

Prefer static HTML, optimized assets, minimal JavaScript, lazy-loaded non-critical visuals, and no unnecessary third-party runtime dependencies.

## SEO

Provide page titles, descriptions, canonical URLs, Open Graph metadata, sitemap, robots.txt, and structured metadata where appropriate.

## CI/CD

Every pull request must build and validate the site. The deployment workflow should publish the production artifact to GitHub Pages only from the approved branch. CI must validate the same production build that is deployed.

## Non-goals

- No backend service for the first release.
- No fake live repository analysis.
- No future roadmap or confidential product strategy.
- No collection of unnecessary visitor data.
- No external runtime dependency unless documented and justified.
