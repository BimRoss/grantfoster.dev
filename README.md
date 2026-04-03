# grantfoster.dev

[![GitHub stars](https://img.shields.io/github/stars/BimRoss/grantfoster.dev?style=social)](https://github.com/BimRoss/grantfoster.dev/stargazers)

Personal site (Next.js), built and deployed as a Docker image.

## Why This Exists

Personal brand compounds.  
This repo is the publishing engine for technical credibility and distribution.

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

Repository variable:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-YSH2D4182J` |

### GA setup contract

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` must exist as a GitHub **repository variable**.
- The frontend Docker image bakes `NEXT_PUBLIC_*` values at `npm run build` time. If GA changes, ship a new tagged image (`v*`) so GitOps rolls a rebuilt frontend.
- Tagged releases fail fast if the GA variable is missing.

Verify what users are actually getting:

```bash
python - <<'PY'
import urllib.request
html = urllib.request.urlopen('https://grantfoster.dev', timeout=15).read().decode('utf-8', 'ignore')
print('googletagmanager.com/gtag/js?id=G-YSH2D4182J' in html)
PY
```

### Release

1. Commit and push to `main` / `master`.
2. `git tag v0.1.1 && git push origin v0.1.1` — image is pushed and the workflow bumps the image tag in [rancher-admin](../rancher-admin) `admin/apps/grantfoster-website/deployment.yaml`.

## Kubernetes

Manifests live in the **rancher-admin** GitOps repo under `admin/apps/grantfoster-website/`. They share the `bimross-web` namespace and the same Ingress resource as bimross.com (host-based routing). See **rancher-admin** README for Fleet and DNS.

## Related BimRoss Projects

- [bimross-website](https://github.com/BimRoss/bimross-website)
- [rancher-admin](https://github.com/BimRoss/rancher-admin)

## Keywords

personal website Next.js, founder website deployment, Docker website pipeline, Rancher GitOps website, technical personal branding.

## Support

If this setup helps your own site ship faster, star it.
