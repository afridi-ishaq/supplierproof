# 04 — API Contracts (conventions; not yet implemented)

No production API contract is approved yet. Do not invent endpoints and treat them as established. Propose endpoint changes in the task plan and update this file when contracts are agreed.

## Conventions to follow
- Use resource-oriented names and consistent JSON shapes.
- Validate request bodies, query parameters and path identifiers on the server.
- Derive the acting user and organization membership from the authenticated session; do not trust client-supplied tenant identity.
- Authorize every resource operation, including downloads and nested resources.
- Return appropriate HTTP status codes and safe error messages.
- Use pagination for collection endpoints.
- Make retryable create operations idempotent where appropriate.
- Record audit events for sensitive changes.
- Keep file bytes in private object storage; APIs control upload and retrieval authorization.
- Document request/response schemas and permission requirements before implementation.

## Candidate resource areas
Organizations, memberships, suppliers, supplier sites, materials, products, batches, buyer requests, requirements, evidence documents, evidence versions, evidence links, reviews, clarifications, vault items, share grants, evidence packs and audit events.
