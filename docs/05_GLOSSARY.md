# 05 — Canonical Glossary

Use these names consistently in documentation, database models, code and API contracts. Do not rename without an approved ADR and documentation update.

| Canonical term | Meaning |
|---|---|
| Organization | A tenant/company account boundary. |
| User | An authenticated human account. |
| Membership | A user's relationship to an Organization, including role and status. |
| Supplier | A supplier/business record managed within an organization context. |
| SupplierSite | A physical facility/site operated by a Supplier. |
| Material | An input/raw material used in products. |
| Product | A product or product definition owned by an organization. |
| ProductMaterial | Relationship describing materials contained/used in a Product. |
| SupplierMaterial | Relationship describing materials a Supplier supplies. |
| Batch | A production lot/batch associated with a Product. |
| BuyerRequest | A buyer's structured request for evidence. |
| Requirement | A versioned proof requirement contained in a BuyerRequest. |
| EvidenceDocument | Logical identity of a document across versions. |
| EvidenceVersion | An immutable uploaded file version of an EvidenceDocument. |
| EvidenceLink | Explicit link between an EvidenceVersion and a requirement or supply-chain entity. |
| ReviewDecision | Human decision on a specific EvidenceVersion for a specific Requirement. |
| ProvenanceRecord | Record of evidence origin, uploader, channel and receipt context. |
| VerificationCheck | Explicit check of a source/issuer using a recorded method and result. |
| EvidenceVault | Supplier-controlled reusable evidence library. |
| VaultItem | A vault entry referencing an evidence document/version. |
| ShareGrant | Explicit permission to access a defined resource scope. |
| EvidencePack | Versioned collection of selected evidence for a recipient/request. |
| PackItem | Snapshot of a specific EvidenceVersion and relevant metadata in a pack. |
| ClarificationThread | Discussion associated with a Requirement. |
| ClarificationMessage | Individual message within a ClarificationThread. |
| AuditEvent | Append-oriented record of a sensitive actor/action/target event. |
| Policy / management evidence | Evidence of policies, governance, management systems or commitments. |
| Operational evidence | Evidence of activities or controls in operation. |
| Transaction / batch evidence | Evidence tied to an order, shipment, material lot or production batch. |
| Tenant isolation | Ensuring one Organization cannot access another Organization's protected data. |
| Modular monolith | One deployable application organized into well-separated modules. |

## Trust language
- **Accepted:** a reviewer accepted a particular version for a particular requirement.
- **Source verified:** a specific verification action was performed and recorded.
- **Hash recorded:** integrity metadata exists for comparison; this does not prove truth.
- **Recorded validity:** dates captured in the system do not indicate expiry; this is not a legal conclusion.
- **Provenance:** information about where evidence came from and how it entered the system.
