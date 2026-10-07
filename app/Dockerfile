FROM 642011519820.dkr.ecr.us-east-1.amazonaws.com/bay/base:runway-api-base-latest
# The base image (runway-api-base.Dockerfile, RUNWAY_API_BASE_IMAGE) already
# has pnpm@10.33.4 activated and a warm store at /opt/bay-store — no
# `--mount=type=cache` here, which would shadow that store at the pnpm
# default path instead of using it. The hardened base defaults to user 1000;
# install/build need root. Runtime drops to 1000.
USER 0
WORKDIR /app

# .npmrc carries the @runway Artifactory registry line (from templates/base) but
# no credential — it is committed, and pnpm refuses to expand `${VAR}` for
# credential keys in a project file for exactly that reason. Auth comes from the
# secret mount below, at the user level. pnpm-workspace.yaml must be present at
# install time so its esbuild build-script allowlist applies during this layer,
# not only after `COPY . .`.
#
# The mounted file exists only for this RUN and never becomes a layer, unlike a
# build ARG. `required=true` fails the build up front rather than installing
# unauthenticated and 401ing halfway through. By hand outside Bay, with
# BAY_NPMRC set to a resolved credential:
#   docker build --secret id=artifactory_npmrc,env=BAY_NPMRC .
#   See `bay docs custom-dockerfiles` for the export line.
#
# The scaffolded template ships no lockfile — one can't be committed for an SDK
# version that publishes after the release commit, and a committed pair is what
# used to force a separate post-publish re-pin chore. `pnpm-lock.yaml*` matches
# nothing on the first build and the app's own lockfile on every build after
# the developer commits one; `--frozen-lockfile` then applies, so their builds
# are reproducible from that point on. `bay deploy` checks the lockfile against
# package.json before the build either way.
COPY package.json pnpm-lock.yaml* .npmrc pnpm-workspace.yaml ./
RUN --mount=type=secret,id=artifactory_npmrc,target=/root/.npmrc,required=true \
    if [ -f pnpm-lock.yaml ]; then \
      pnpm install --frozen-lockfile --prefer-offline; \
    else \
      pnpm install --prefer-offline; \
    fi

COPY . .
RUN pnpm run build

# Trust the AWS RDS CA so a database client (if one is added later) can
# verify Aurora's TLS chain. Bay injects aws-rds-ca.pem into the build
# context at deploy time; `COPY . .` above lands it here.
ENV NODE_EXTRA_CA_CERTS=/app/aws-rds-ca.pem
EXPOSE 3000
USER 1000
ENV NODE_ENV=production
CMD ["npx", "tsx", "src/index.ts"]
