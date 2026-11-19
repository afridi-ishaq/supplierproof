# 02 — System Design & Architecture

**Source:** System Design & Architecture Blueprint v0.2 (18 November 2026)  
**Architecture style:** Modular monolith.

## Architecture principles
- Start with a modular monolith; avoid premature microservices.
- Enforce explicit tenant scoping in every data access path.
- Store original files in private object storage; store metadata, relationships and audit records in PostgreSQL.
- Separate EvidenceDocument from immutable/versioned EvidenceVersion records.
- Separate review status from provenance, source verification, integrity and recorded validity.
- Run scanning, OCR, extraction and report generation asynchronously when introduced.
- AI is opt-in, advisory and human-reviewed; non-AI workflows remain fully supported.
- Version requests, requirements, evidence, decisions and packs so historical states can be reconstructed.

## Logical modules
- Identity & Organizations
- Supplier & Site Management
- Materials, Products & Batches
- Evidence Management
- Buyer Requests & Requirements
- Review & Clarification
- Evidence Vault & Sharing
- Evidence Packs
- Audit & Security

Modules live in one deployable application initially, with clear ownership boundaries.

## Core workflow
1. Buyer creates a BuyerRequest.
2. BuyerRequest contains versioned Requirements.
3. Requirements define evidence category, scope, applicability and acceptance criteria.
4. Requirements are linked to relevant suppliers/sites/materials/products/batches.
5. Supplier or contributor submits an EvidenceVersion.
6. EvidenceVersion is linked to one or more entities and requirements.
7. Reviewer records a ReviewDecision against the exact version and requirement.
8. Missing or unclear items can enter clarification.
9. Selected exact evidence versions are snapshotted into a versioned EvidencePack.
10. Access is granted to the intended recipient under explicit scope and expiry/revocation rules.

## Working technology baseline
This is the recommended starting stack for implementation. Record changes through ADRs.

| Layer | Working choice |
|---|---|
| Application | Next.js App Router + TypeScript |
| UI | Tailwind CSS + shadcn/ui + Lucide |
| Relational database | PostgreSQL (initially managed through Supabase) |
| ORM/migrations | Prisma ORM |
| Authentication | Supabase Auth |
| Authorization | Application-owned Organization, Membership and role/resource policies; evaluate database RLS as defense in depth |
| Private object storage | Cloudflare R2 (S3-compatible) |
| Validation | Zod |
| Tests | Vitest + Playwright |
| Hosting | Vercel for the web application |
| Background jobs | Redis + BullMQ only when async workload justifies it |

Do not introduce microservices, Kubernetes, message brokers or background infrastructure prematurely. Confirm current vendor pricing, limits and data-processing terms before production use.

## Data boundaries
- PostgreSQL stores structured domain data and audit metadata.
- R2 stores original evidence files privately.
- The application authorizes access before returning file content or short-lived signed access.
- Do not store public permanent document URLs.
- Secrets stay in environment variables/secret management and never in Git.

## Evidence lifecycle
- EvidenceDocument is the logical document identity.
- EvidenceVersion is an immutable uploaded file version.
- New versions supersede earlier versions without mutating them.
- ProvenanceRecord captures where/how evidence was received.
- VerificationCheck records an explicit verification action.
- ReviewDecision records human acceptance/rejection/request-for-clarification for one version and requirement.
- EvidencePack/PackItem snapshots exact versions and metadata.

## Security architecture
- Every tenant-owned record must carry or derive a validated organization boundary.
- Server-side authorization is required for every resource operation.
- Use explicit foreign keys or validated typed-link tables, not unchecked polymorphic IDs.
- Use private storage and validate uploads.
- Recheck grants on every protected access; revoked/expired grants must be denied.
- Audit sensitive actions.
- Test IDOR, cross-tenant access, role escalation, guest-link abuse and unauthorized vault access.

## AI and document processing
AI extraction is disabled by default for the initial pilot. If enabled later:
- obtain organization-level opt-in and disclose processing;
- preserve original file;
- store extracted data separately from original metadata;
- label outputs as machine-suggested;
- require human confirmation for consequential fields;
- retain a usable non-AI path.

## Architecture decisions still requiring explicit ADRs
- Exact tenancy enforcement strategy and whether PostgreSQL RLS is used in addition to application authorization.
- Supabase Auth integration/session strategy.
- Prisma version and migration configuration.
- Evidence-link implementation (typed join tables versus another validated design).
- Storage upload/download flow, scanning provider and retention policy.
- Role/permission matrix.
