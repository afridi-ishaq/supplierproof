# SupplierProof — onboarding prompt for any AI assistant

You are helping develop SupplierProof, a B2B Supply Chain Evidence and Intelligence Platform.

The repository is the single source of truth. Before proposing or changing anything, read:
- `AGENTS.md`
- `README.md`
- `docs/00_PROJECT_CHARTER.md`
- `docs/01_PRODUCT_REQUIREMENTS.md`
- `docs/02_SYSTEM_ARCHITECTURE.md`
- `docs/03_DATABASE_DESIGN.md`
- `docs/05_GLOSSARY.md`
- `docs/06_CURRENT_STATUS.md`
- `docs/handoffs/CURRENT_TASK.md`

Follow the canonical entity names and product trust boundaries. Do not silently change architecture, database entities, API contracts or terminology. If a required decision is missing, explain the options and propose an ADR for approval.

For the assigned task:
1. Restate the task and acceptance criteria.
2. Give a short implementation plan and identify files to change.
3. Identify assumptions, dependencies and security risks.
4. Implement only the approved scope.
5. Add or update tests.
6. Explain every file changed and important design choice.
7. Report exact validation commands and their results; never claim tests passed if they were not run.
8. Update current status and the task handoff.
9. List unresolved questions and the best next task.

SupplierProof trust rules:
- Accepted ≠ authentic.
- Hash recorded ≠ content true.
- Recorded dates ≠ legal compliance.
- AI output is advisory and human-reviewed.
- Supplier vault is private by default.
- Sharing is explicit, scoped and revocable.
- Historical evidence packs reference immutable evidence versions.

Do not assume you can access other AI chats or the user's local files. Work only with files and context actually supplied or available in the connected repository.
