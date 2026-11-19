# 03 — Database Design & Conceptual ERD

**Source:** Database ERD and Data Model v0.2 (18 November 2026)

> This is a conceptual domain model, not a final physical schema. Field types, exact constraints, indexes, deletion rules, tenancy enforcement and implementation details require approved implementation ADRs.

## Core modelling decisions
1. Separate EvidenceDocument (logical identity) from EvidenceVersion (immutable file version).
2. Bind ReviewDecision to a specific EvidenceVersion and Requirement.
3. Model provenance and explicit verification as separate records.
4. Model supplier vault items and grants explicitly; do not expose vault contents by default.
5. EvidencePack and PackItem snapshot exact versions so later uploads do not mutate historical packs.
6. Use explicit foreign keys or validated typed-link tables; do not rely on unchecked polymorphic IDs.
7. Every tenant-owned record must carry or derive a validated organization boundary.

## Domain groups

### Organization and supply chain
- Organization
- User
- Membership
- Supplier
- SupplierSite
- Material
- Product
- ProductMaterial
- SupplierMaterial
- Batch
- Transaction (candidate domain record; finalize scope before physical schema)

### Requests and evidence
- BuyerRequest
- Requirement
- EvidenceDocument
- EvidenceVersion
- EvidenceLink
- ReviewDecision
- ProvenanceRecord
- VerificationCheck

### Reuse, sharing and audit
- EvidenceVault
- VaultItem
- ShareGrant
- EvidencePack
- PackItem
- ClarificationThread
- ClarificationMessage
- AuditEvent

## Important illustrative fields
- Organization: id, name, status, created_at.
- Membership: user_id, organization_id, role, status.
- Supplier: organization_id, legal_name, registration_ref.
- SupplierSite: supplier_id, address, site_code, effective dates.
- Product: organization_id, identifiers and specification.
- Batch: product_id, batch_code, production dates.
- EvidenceDocument: owner_org_id, document_type, issuer, reference, scope, evidence_class.
- EvidenceVersion: document_id, version_no, storage_key, sha256, mime_type, size, uploaded_by, supersedes_version_id.
- Requirement: request_id, version, category, description, applicability, criteria, due_date.
- ReviewDecision: requirement_id, evidence_version_id, outcome, reviewer_id, rationale, created_at.
- ProvenanceRecord: evidence_version_id, source_type, uploader, channel, received_at, source_context.
- VerificationCheck: evidence_version_id, verifier, method, issuer/registry, checked_at, result, supporting_reference.
- ShareGrant: grantor, recipient, resource scope, purpose, expires_at, revoked_at, token_hash.
- EvidencePack: request_id, pack_version, recipient context.
- PackItem: evidence_version_id and metadata snapshot.
- AuditEvent: organization_id, actor, action, target, timestamp, before/after metadata.

These fields are illustrative and must be refined before migrations.

## Constraints and indexes to plan
- Unique membership per user and organization.
- Unique version number per EvidenceDocument.
- Foreign-key integrity for typed entity links and evidence-version references.
- Index organization_id on tenant-owned tables and include it in authorization-aware query patterns.
- Index evidence expiry/issue dates, requirement status, supplier identifiers and batch codes.
- Unique token hashes for guest/share grants; avoid storing raw bearer tokens.
- Use transactions when creating a version, supersession link, audit event and related status changes.
- Define soft-delete versus hard-delete policy based on legal retention and customer deletion requirements.

## Required security tests
- Cross-organization record leakage.
- Supplier guest IDOR/access to other requirements or documents.
- Buyer access to ungranted vault contents.
- Revoked/expired grants denied on subsequent server-side access.
- Historical pack snapshots remain stable after new evidence versions.
- Unauthorized changes to review, provenance or verification records.
- Upload isolation and scanning before parsing/preview.

See `docs/ERD.mmd` for the Mermaid conceptual diagram.
