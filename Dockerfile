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

# 🔑 Force the server to listen on all interfaces, not the container's hostname IP
ENV HOSTNAME=0.0.0.0
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy the "standalone" server and static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

HEALTHCHECK --interval=5s --timeout=5s --retries=10 --start-period=30s \
    CMD curl -fsS http://127.0.0.1:3000/api/health || exit 1

# Next standalone starts server.js from the standalone folder
CMD ["node", "server.js"]
