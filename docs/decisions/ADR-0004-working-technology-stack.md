# ADR-0004: Working technology baseline

- **Status:** Proposed baseline for initial implementation; confirm versions and provider settings before first migration.
- **Date:** 2026-11-19

## Decision proposal
- Next.js App Router + TypeScript.
- Tailwind CSS + shadcn/ui + Lucide.
- PostgreSQL, initially managed through Supabase.
- Prisma ORM.
- Supabase Auth.
- Application-owned Organization/Membership/role/resource authorization; evaluate PostgreSQL RLS as defense in depth.
- Cloudflare R2 for private evidence object storage.
- Zod for validation.
- Vitest + Playwright for tests.
- Vercel for web application hosting.
- Redis + BullMQ only when a real background-processing requirement justifies it.

## Consequences and cautions
- Keep the initial system a modular monolith.
- Do not add Redis/BullMQ before async jobs exist.
- Verify current provider pricing, limits, data location and data-processing terms before production.
- Confirm Prisma version/configuration and Supabase Auth session integration in the actual project before committing to migrations.
- Any change to this baseline requires an updated ADR.
