# syntax = docker/dockerfile:1
FROM oven/bun:1 AS base
WORKDIR /app
ENV NODE_ENV="production"
ENV CI=true

FROM base AS builder
COPY bun.lock package.json ./
RUN  CI=true bun install --frozen-lockfile
COPY . .
RUN bun --bun run build
# RUN rm -rf node_modules && CI=true bun install --ci

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder  /app/dist /app/dist

ENV PORT=4321
ENV HOST=0.0.0.0

# Start the server by default, this can be overwritten at runtime
EXPOSE 4321
CMD [ "bun","run", "./dist/server/entry.mjs" ]
