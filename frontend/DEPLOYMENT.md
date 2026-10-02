# Deployment

Deploy the `frontend` directory as the Vercel project root. Vercel will serve the Vite app and run `api/contact.js` as a serverless function at `/api/contact`.

Set these environment variables in the Vercel project settings:

- `RESEND_API_KEY`: the Resend API key, stored only on the server
- `RESEND_FROM_EMAIL`: a sender address verified with Resend
- `RESEND_TO_EMAIL`: the inbox that should receive contact messages

Do not prefix the API key with `VITE_` or put it in a frontend environment variable. Remove any existing Resend key from `frontend/.env`, rotate it in Resend if it has ever been used in a frontend build, and add the replacement as `RESEND_API_KEY` in Vercel. Redeploy after configuring the variables.

Static-only hosting cannot safely call Resend with a secret key. The frontend no longer calls the Express backend for contact or project data.