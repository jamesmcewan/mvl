
# syntax = docker/dockerfile:1

# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.1.24
FROM oven/bun:${BUN_VERSION}-slim as base

LABEL fly_launch_runtime="Bun"

# Bun app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"
ENV CI=true

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
  apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3

# Install node modules
COPY --link bun.lockb package.json ./
RUN bun install

# Copy application code
COPY --link . .

# Build application
RUN bun --bun run build

# Remove development dependencies
RUN rm -rf node_modules && \
  bun install --ci


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

ENV PORT=4321
ENV HOST=0.0.0.0

# Start the server by default, this can be overwritten at runtime
EXPOSE 4321
CMD [ "node", "./dist/server/entry.mjs" ]
