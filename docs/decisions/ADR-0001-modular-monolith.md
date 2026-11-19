# ADR-0001: Start with a modular monolith

- **Status:** Accepted as the v0.2 architecture direction; implementation details remain open.
- **Date:** 2026-11-19

## Context
SupplierProof is an early product with a small development capacity. Its domain is complex, but independent services would add deployment, observability, networking and consistency costs before there is a demonstrated need.

## Decision
Start with one deployable application organized into explicit domain modules. Keep module boundaries clear and avoid premature microservices.

## Consequences
- Simpler local development and deployment.
- Easier end-to-end transactions across core workflows.
- Module boundaries must be respected to avoid a tightly coupled monolith.
- Extract a service only when scaling, ownership or reliability evidence justifies it, through a new ADR.
