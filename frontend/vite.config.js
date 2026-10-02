import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import contactHandler from "./api/contact.js";

function contactApiPlugin() {
  return {
    name: "contact-api",
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const pathname = new URL(
          request.url ?? "/",
          "http://localhost"
        ).pathname;

        if (pathname !== "/api/contact") {
          return next();
        }

        if (request.method !== "POST") {
          response.setHeader("Allow", "POST");
          response.statusCode = 405;
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({ message: "Method not allowed" }));
          return;
        }

        try {
          let rawBody = "";

          for await (const chunk of request) {
            rawBody += chunk;

            if (Buffer.byteLength(rawBody) > 10000) {
              response.statusCode = 413;
              response.end(JSON.stringify({ message: "Request is too large." }));
              return;
            }
          }

          request.body = rawBody ? JSON.parse(rawBody) : {};

          const apiResponse = {
            setHeader(name, value) {
              response.setHeader(name, value);
              return this;
            },
            status(code) {
              response.statusCode = code;
              return this;
            },
            json(body) {
              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify(body));
              return response;
            },
          };

          await contactHandler(request, apiResponse);
        } catch {
          response.statusCode = 400;
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({ message: "Invalid request body." }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  if (!process.env.RESEND_API_KEY && env.RESEND_API_KEY) {
    process.env.RESEND_API_KEY = env.RESEND_API_KEY;
  }

  return {
    plugins: [react(), contactApiPlugin()],
  };
});