# grantfoster.dev

Personal site (Next.js), built and deployed as a Docker image.

## Local

```bash
docker compose up --build
```

Open http://localhost:3000 (or set `PORT` in the environment). The compose file bind-mounts `frontend/` and uses a named volume for `node_modules` and `.next`; the container runs `npm ci` then `npm run dev:docker` for hot reload.

## CI/CD

GitHub Actions (`.github/workflows/grantfoster-images.yml`) builds the **production** stage from `deploy/docker/frontend.Dockerfile` and pushes `geeemoney/grantfoster-website` to Docker Hub when you push a **git tag** `v*` (e.g. `v0.1.0`).

### Secrets (repository settings)

| Secret | Purpose |
|--------|---------|
| `DOCKERHUB_USERNAME` | Docker Hub login |
| `DOCKERHUB_TOKEN` | Docker Hub access token |
| `RANCHER_ADMIN_REPO_TOKEN` | PAT with push access to `bimross/rancher-admin` (for the gitops job on tag) |

### Release

1. Commit and push to `main` / `master`.
2. `git tag v0.1.1 && git push origin v0.1.1` — image is pushed and the workflow bumps the image tag in [rancher-admin](../rancher-admin) `admin/apps/grantfoster-website/deployment.yaml`.

## Kubernetes

Manifests live in the **rancher-admin** GitOps repo under `admin/apps/grantfoster-website/`. They share the `bimross-web` namespace and the same Ingress resource as bimross.com (host-based routing). See **rancher-admin** README for Fleet and DNS.
