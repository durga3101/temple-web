# api

Server-side endpoints, webhooks, or serverless functions. Use this area to host payment webhook handlers (do not store secrets here — use environment variables).

Suggested structure:
- `payments/` - server endpoint to create payment orders and handle webhooks
- `admin/` - protected endpoints for admin actions
