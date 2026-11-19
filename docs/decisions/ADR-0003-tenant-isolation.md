# ADR-0003: Organization-scoped tenant isolation

- **Status:** Required product/security invariant; enforcement mechanism pending implementation ADR.
- **Date:** 2026-11-19

## Context
SupplierProof stores confidential supplier and buyer evidence for multiple organizations. Cross-tenant leakage would be a critical security failure.

## Decision
Every tenant-owned record must carry or derive a validated Organization boundary. Every server-side read/write and file access must enforce resource-level authorization. Client-supplied organization IDs are never trusted by themselves.

## Open implementation choice
Decide whether to combine application-level authorization with PostgreSQL Row Level Security (RLS), and document session/connection handling. Do not assume RLS is enabled until implemented and tested.

## Required tests
Cross-tenant reads/writes, IDOR, nested resource access, role escalation, ungranted vault access and share-grant revocation.
