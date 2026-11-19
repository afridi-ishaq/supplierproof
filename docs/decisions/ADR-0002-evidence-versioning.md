# ADR-0002: Immutable evidence versions and pack snapshots

- **Status:** Accepted as a v0.2 domain modelling decision.
- **Date:** 2026-11-19

## Context
Evidence is reused and reviewed over time. Replacing a file must not rewrite the historical record or change what a buyer previously received.

## Decision
Separate EvidenceDocument (logical identity) from immutable EvidenceVersion records. ReviewDecision references the exact EvidenceVersion and Requirement. EvidencePack/PackItem snapshots exact versions and relevant metadata.

## Consequences
- Historical reviews and packs remain reproducible.
- New uploads create new versions and explicit supersession links.
- Implementation must define uniqueness, transaction boundaries, retention and deletion behavior.
