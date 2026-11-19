# Current Task Handoff

**Status:** Ready to begin  
**Current phase:** Phase 0 — project setup

## Task
Set up the local SupplierProof repository using the v0.2 foundation documents and AI Project Context Pack v1.0.

## Completed
- Founder has downloaded the original SupplierProof v0.2 ZIP.
- AI Project Context Pack v1.0 prepared.

## Next actions
1. Extract original ZIP into `original-documents/`.
2. Copy context pack files to the repository root.
3. Initialize Git and create the GitHub remote.
4. Initialize Next.js + TypeScript in the application directory or repository root (choose one layout and keep it consistent).
5. Verify setup and update this handoff.

## Decisions to preserve
- Modular monolith.
- PostgreSQL relational model.
- Immutable EvidenceVersion and versioned EvidencePack snapshots.
- Organization-scoped authorization.
- Private-by-default evidence vault and explicit revocable sharing.
- AI extraction disabled by default for initial pilot.

## Files changed
None in the application repository yet.

## Validation
Not applicable; no application code has been initialized.

## Risks / open questions
- Confirm final repository layout before running scaffolding commands.
- Confirm Supabase Auth and Prisma configuration against current package versions.
- Do not create physical database tables until the schema is reviewed against the conceptual ERD and tenant model.
