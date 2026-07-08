# Lowery's Landscaping — loweryslandscape.com

Lawn care website for Denton County / North DFW, TX. Next.js App Router +
Tailwind, deployed on Vercel.

## Before launch — required

1. **Replace placeholder prices** in [lib/services.ts](lib/services.ts) — see
   the giant TODO block at the top. Every price on the site comes from that
   one file.
2. **Replace placeholder testimonials** in
   [components/Trust.tsx](components/Trust.tsx) (`PLACEHOLDER_REVIEWS`).
3. **Replace the placeholder owner story** in
   [app/about/page.tsx](app/about/page.tsx).

## Environment variables (set in Vercel)

| Var | Purpose |
| --- | --- |
| `SUPABASE_URL` | Supabase project URL (server-only) |
| `SUPABASE_SERVICE_ROLE_KEY` | Service-role key (server-only) |
| `RESEND_API_KEY` | Resend API key for lead notification emails |
| `NOTIFICATION_EMAIL` | Where "New Lawn Care Lead" emails are sent |
| `RESEND_FROM_EMAIL` | Optional verified sender address |
| `NEXT_PUBLIC_GTM_ID` | Optional GTM container ID — unset renders no GTM |

## Lead capture

The quote form submits via a server action ([lib/actions.ts](lib/actions.ts))
that inserts into the shared Supabase `leads` table with
`source = 'lowerys-landscaping'` (separates Lowery's leads from Dallas Best
leads), then emails `NOTIFICATION_EMAIL` via Resend. Includes a honeypot field
and per-phone rate limiting. On success the client pushes a `lead_submitted`
event to the GTM dataLayer.

## Develop

```bash
npm install
npm run dev
```
