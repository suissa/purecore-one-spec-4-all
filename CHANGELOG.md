# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0]

### What's Changed

- :memo: **docs**: Expanded README with detailed philosophies for each test dialect.
- :memo: **docs**: Added complete, realistic code examples for Math, Narrative, and Imperative dialects.
- :recycle: **refactor**: Updated `src/index.ts` to export dialect functions as top-level exports, simplifying imports.
- :wrench: **chore**: Standardized package naming in documentation to `@purecore/one-spec-4-all`.
- :art: **style**: Converted comparison table in README from HTML to Markdown for better portability.
- :sparkles: **feat**: Complete README restructure following podcast feedback:
  - Added "Cansado de Descrever?" hook connecting philosophy to practice
  - Added "Quick Start" section for 5-minute first test victory
  - Added visual dialect chooser flowchart
  - Added "A Dor Que Resolvemos" pain-point sections before each dialect
  - Moved advanced topics (Rosetta Table, Polyglot Mode) to the end
  - Added gradual adoption/migration guide
- :sparkles: **feat**: Complete CLI rewrite with Vitest-style output:
  - ANSI color palette (green/red/yellow/cyan)
  - Spinner animation during test execution
  - Per-file timer showing elapsed time
  - Grouped test results with indentation
  - Summary statistics (files, tests, duration)
  - Exit codes based on test results
- :sparkles: **feat**: README restructure following critica2.md podcast:
  - Visual proof of legacy coexistence (Jest + dialeto) at the very top
  - New "Por Que Adotar no Seu Time?" section for tech leads/managers
  - Progressive disclosure: API summaries in README, full docs linked separately
  - Created `/docs/api-imperativo.md`, `/docs/api-matematico.md`, `/docs/api-narrativo.md`
  - Reordered sections: Trust → Strategy → Quick Start → Choose Dialect
