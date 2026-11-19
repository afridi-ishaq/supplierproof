SUPPLIERPROOF FOUNDATION DOCUMENT PACK — VERSION 0.2
Date: 18 November 2026

CONTENTS
01 Product Vision & Founder's Charter v0.2
02 Product Requirements Document v0.2
03 System Design & Architecture Blueprint v0.2
04 Market Discovery, Positioning & Execution Plan v0.2
05 Textile Industry Evidence Specification v0.2
06 Product Differentiation Strategy v0.2
07 Database ERD and Data Model v0.2
SupplierProof_ERD_v0.2.mmd — editable Mermaid ERD source

IMPORTANT STATUS
These documents are a product and engineering planning baseline, not proof of market demand,
legal compliance, certification validity, or supplier authenticity. The initial textile beachhead,
features, pricing and differentiation are hypotheses to validate with real exporters, suppliers
and buyers.

KEY DESIGN DECISIONS
- Requirement categories: policy/management, operational, and transaction/batch-specific.
- Review status is separate from provenance, source verification, file integrity and recorded validity.
- EvidenceDocument is separate from immutable EvidenceVersion.
- Supplier vault is supplier-controlled; all buyer access requires explicit scoped grants.
- Clarification threads and requirement templates are P1.
- AI extraction is disabled by default during pilot and opt-in at organization level.
- Hashes demonstrate file consistency, not authenticity.
- Security release gates include automated IDOR/cross-tenant tests and independent penetration testing
  before broad production launch.

NEXT STEP
Validate the workflow with interviews and anonymized buyer requests before treating the proposed
MVP scope or architecture as final.
