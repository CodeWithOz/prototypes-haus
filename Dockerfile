# ---- deps ----
FROM node:24-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# ---- build ----
FROM node:24-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- run ----
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# ⬇️ add curl so Coolify's healthcheck works
RUN apk add --no-cache curl

HEALTHCHECK --interval=5s --timeout=5s --retries=10 --start-period=30s \
  CMD curl -fsS http://127.0.0.1:3000/api/health || exit 1

# Copy the "standalone" server and static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Next standalone starts server.js from the standalone folder
EXPOSE 3000
CMD ["node", "server.js"]
