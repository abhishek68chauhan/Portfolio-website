# Deployment

Deploy the `frontend` directory as the Vercel project root. Vercel will serve the Vite app and run `api/contact.js` as a serverless function at `/api/contact`. The Vite development server also mounts this endpoint locally when you run `npm run dev`.

Set this environment variable in the Vercel project settings:

- `RESEND_API_KEY`: the Resend API key, stored only on the server

The contact function sends from Resend's `onboarding@resend.dev` test sender to `abhishekchauhan.06082004@gmail.com`. Resend's test sender is limited to recipient addresses verified on your Resend account; sending to other recipients requires a verified sending domain.

Do not prefix the API key with `VITE_`. A local `frontend/.env` value is not automatically available to Vercel production, so add `RESEND_API_KEY` in Vercel's project settings and redeploy.

Static-only hosting cannot safely call Resend with a secret key. The frontend no longer calls the Express backend for contact or project data.