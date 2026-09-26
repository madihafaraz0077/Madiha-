# Roshni Drive Trial Booking

A responsive landing page that helps nervous first-time drivers in Peshawar book a low-pressure trial lesson with Roshni Drive.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/roshni-drive/src/App.tsx` — landing page content and interactions
- `artifacts/roshni-drive/src/index.css` — visual theme, responsive layout, and motion
- `attached_assets/Roshni_Drive_—_Book_a_Trial_Lesson_1790400882956.html` — original supplied copy reference

## Architecture decisions

- The first build is presentation-first and frontend-only; booking is routed to WhatsApp and phone links.
- The page uses the supplied Roshni Drive copy and contact details without inventing backend workflows.
- The visual direction uses warm paper tones, deep petrol green, terracotta accents, and editorial serif typography to make the first lesson feel reassuring rather than clinical.

## Product

The site explains the trial lesson, reassures nervous learners, shows what the lesson includes, outlines the booking process, and sends visitors to WhatsApp or a phone call to book.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
