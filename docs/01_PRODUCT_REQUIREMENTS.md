# 01 — Product Requirements (working summary)

**Source:** Product Requirements Document v0.2 (18 November 2026)  
**Status:** Proposed; requires customer validation.

## Product goal
Enable an exporter or manufacturer to respond to a buyer’s evidence request through one structured workflow that links requirements to suppliers, sites, materials/products/batches and supporting records, while preserving provenance, review history and controlled sharing.

## Primary user roles
- Exporter/manufacturer administrator.
- Evidence manager or contributor.
- Supplier contributor.
- Buyer requester/reviewer.
- Internal platform administrator (strictly separated from customer data access).

Exact permission matrices must be designed and tested before implementation.

## Core evidence classes
1. **Policy / management evidence:** policies, governance, management systems and commitments.
2. **Operational evidence:** records of activities or controls in operation, such as production records, water/energy logs or chemical inventories.
3. **Transaction / batch evidence:** records tied to a specific order, shipment, material lot or production batch, such as invoices, batch records or chain-of-custody documents.

Custom categories may be configured without changing the core class semantics.

## Functional requirements (core)
- Isolate tenant data by organization and enforce resource-level authorization on every read/write path.
- Represent suppliers, supplier sites, materials, products, batches and transactions as distinct records.
- Link evidence versions to entities and requirements through explicit relationship records.
- Preserve original uploaded files; store extracted or corrected metadata separately.
- Preserve evidence version history; replacement must not silently erase earlier versions.
- Keep review outcome separate from provenance, source verification, file integrity and recorded validity.
- Support reusable supplier evidence vaults with explicit grants; vault contents are private by default.
- Support controlled, revocable sharing and versioned evidence packs.
- Preserve audit history for sensitive actions.
- Support human review and clarification.

## Priority guidance
- **P0 — foundation:** tenant isolation, core domain entities, evidence documents and immutable versions, explicit evidence links, distinct trust dimensions, auditability, secure private storage, request/requirement workflow foundations.
- **P1 — workflow depth:** reusable evidence vault, clarification threads, requirement templates, quality checks, textile annex, controlled versioned packs.
- **P2 — advanced capabilities:** multi-tier supply-chain intelligence, external verification integrations, advanced AI and regulatory mapping.

Priorities are product guidance; refine them after discovery.

## Non-functional requirements
- Security and tenant isolation by design.
- Traceable, auditable decisions and access.
- Reliable private file storage and controlled retrieval.
- Clear performance and usability for frequent evidence workflows.
- Data export/interoperability and sensible retention/deletion policies.
- Accessible, maintainable and testable application architecture.

## Trust semantics
A ReviewDecision is a human decision about a specific EvidenceVersion for a specific Requirement. It is not an authenticity certification. Provenance, source verification, file integrity and recorded validity are separate dimensions.

## Release gates
Before a real pilot, test cross-tenant isolation, IDOR, guest/share-link abuse, unauthorized vault access, revoked/expired grants, privilege escalation, upload validation and historical pack stability.
