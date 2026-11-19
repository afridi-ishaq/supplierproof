# SupplierProof — AI Project Context Pack v1.0

**Purpose:** A shared, repository-friendly source of truth for human developers and AI assistants working on SupplierProof.

## Start here
1. Read `AGENTS.md`.
2. Read `docs/00_PROJECT_CHARTER.md`, `docs/01_PRODUCT_REQUIREMENTS.md`, `docs/02_SYSTEM_ARCHITECTURE.md`, `docs/03_DATABASE_DESIGN.md`, and `docs/05_GLOSSARY.md`.
3. Read `docs/06_CURRENT_STATUS.md` before making claims about implementation.
4. Read `docs/handoffs/CURRENT_TASK.md` before starting assigned work.
5. If a decision is unclear, propose an ADR; do not silently change the architecture.

## Documentation map
- `AGENTS.md` — shared instructions for AI coding assistants and contributors.
- `PROMPT_FOR_ANY_AI.md` — copy/paste onboarding prompt for a new AI chat.
- `docs/00_PROJECT_CHARTER.md` — vision, positioning, principles and boundaries.
- `docs/01_PRODUCT_REQUIREMENTS.md` — product goal, roles, requirements and priorities.
- `docs/02_SYSTEM_ARCHITECTURE.md` — architecture, workflows, security and working technology baseline.
- `docs/03_DATABASE_DESIGN.md` — conceptual domain model and database constraints.
- `docs/04_API_CONTRACTS.md` — API design conventions; contracts are not yet implemented.
- `docs/05_GLOSSARY.md` — canonical names and definitions.
- `docs/06_CURRENT_STATUS.md` — current known project status; update it as work is completed.
- `docs/decisions/` — Architecture Decision Records.
- `docs/handoffs/` — task handoffs between contributors and AI assistants.
- `docs/templates/` — reusable ADR and task templates.
- `docs/ERD.mmd` — Mermaid conceptual ER diagram.

## Relationship to v0.2 foundation documents
This pack is an operational companion, not a replacement for the seven original v0.2 Word documents. Keep those originals unchanged in a separate `original-documents/` directory or archive. When this pack and an original v0.2 document differ, flag the discrepancy and ask for a decision; do not silently rewrite history.

## Important status rule
The product, architecture and data model are designed/proposed. This pack does **not** claim that application code, database schema, authentication, storage, APIs or production infrastructure already exist.
