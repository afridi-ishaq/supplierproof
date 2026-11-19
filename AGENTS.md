# SupplierProof contributor and AI-agent instructions

## 1. Before doing work
- Read this file and the relevant files under `docs/`.
- Read `docs/06_CURRENT_STATUS.md` and `docs/handoffs/CURRENT_TASK.md`.
- Treat the repository as the source of truth. Chat history is not a substitute for committed project decisions.
- Identify the exact task and acceptance criteria before editing.

## 2. Product invariants — do not violate
- SupplierProof is a **Supply Chain Evidence and Intelligence Platform**, not a generic CRM, file drive or supplier directory.
- The core workflow is: buyer request → structured requirements → links to suppliers/sites/materials/products/batches → evidence submission → human review → controlled, versioned evidence pack.
- Evidence may be policy/management, operational, or transaction/batch-specific.
- A review acceptance is not proof of authenticity, legal compliance or ethical performance.
- A recorded file hash supports integrity comparison; it does not prove the truth of the document or identity of its issuer.
- “Source verified” may be shown only when a specific verification action records the source, method, actor, date and result.
- AI extraction and analysis are advisory, opt-in, and human-reviewed. The non-AI workflow must remain usable. AI extraction is disabled by default for the initial pilot.
- Supplier vault contents are private by default. Buyers see only explicitly granted resources.
- Sharing must be scoped, time-bound where appropriate, and revocable.
- Evidence versions and historical evidence packs must be immutable snapshots; new uploads must not silently change old packs.
- Preserve provenance, review history and auditability.

## 3. Architecture and implementation rules
- Begin with a **modular monolith**. Do not introduce microservices without an approved ADR and a demonstrated need.
- Use TypeScript and the agreed working stack recorded in `docs/02_SYSTEM_ARCHITECTURE.md`.
- PostgreSQL is the system of record for structured business data. Store binary evidence files in private object storage, not as public URLs.
- Use explicit tenant/organization scoping on every tenant-owned read and write.
- Enforce resource-level authorization on the server. Never trust organization IDs, role names, object keys or resource IDs supplied by the browser without validation.
- Use typed foreign keys or validated relationship tables. Do not use unchecked polymorphic IDs.
- Keep review outcome, provenance, source verification, file integrity and recorded validity as separate dimensions.
- Validate input at system boundaries. Prefer Zod schemas shared between form and server where appropriate.
- Long-running file scanning, OCR, extraction and pack generation should be asynchronous when introduced.
- Do not add Redis/BullMQ or other infrastructure until a real asynchronous workload justifies it.

## 4. Database rules
- Do not treat the conceptual ERD as a final physical schema.
- Propose schema changes before implementation when they affect core entities, tenancy, evidence versioning, grants, reviews or historical packs.
- Add appropriate foreign keys, unique constraints and indexes.
- Every tenant-owned record must carry or derive a validated organization boundary.
- Use transactions for multi-record operations such as creating a version, supersession relation and audit event.
- Define delete/retention behavior before implementing destructive operations.
- Never edit an already-applied migration to change history; create a new migration.

## 5. Security and privacy
- Never commit secrets, tokens, service-role keys, private URLs or customer documents.
- Keep uploaded evidence private; authorize downloads server-side or use short-lived signed access.
- Test cross-organization access, IDOR, role escalation, revoked/expired grants and access to ungranted vault items.
- Treat uploaded documents and extracted text as untrusted input.
- Do not send customer evidence to an AI provider unless the organization has explicitly opted in and the data handling is disclosed.
- Log meaningful security-sensitive actions without leaking document contents or secrets.

## 6. Collaboration protocol
- Do not let multiple assistants edit the same files or schema simultaneously.
- Before coding, report: understanding, plan, files to change, assumptions and risks.
- Keep tasks small and bounded. Do not expand scope without approval.
- Do not silently rename canonical entities or API fields.
- If a design decision is missing, write a proposed ADR and ask for approval rather than inventing a permanent decision.
- After work, report files changed, behavior implemented, migrations, tests run, results, known limitations and follow-up work.
- Update `docs/06_CURRENT_STATUS.md` and `docs/handoffs/CURRENT_TASK.md` when the task changes project status.

## 7. Definition of done
A task is not done merely because code was generated. It is done when:
1. Acceptance criteria are met.
2. Relevant tests pass (or missing tests are explicitly explained).
3. Authorization and tenant boundaries are checked where applicable.
4. Errors and edge cases are handled.
5. Documentation and handoff are updated.
6. The developer can explain the implementation.
