## DevOps Assessment: Next.js + Docker + GHCR + Minikube

This repository contains a Next.js app containerized with Docker, built/pushed via GitHub Actions to GHCR, and deployable to Kubernetes (Minikube) using manifests in `k8s/`.

### Prerequisites
- Node 20+
- Docker
- kubectl + Minikube
- GitHub account with a public repository

### Local Development
```bash
npm install
npm run dev
# http://localhost:3000
```

### Health Check
- `GET /api/health` → `{ "status": "ok" }`

### Production Build Locally
```bash
npm run build
npm start
# http://localhost:3000
```

### Docker
Build and run locally:
```bash
docker build -t portfolio:local .
docker run --rm -p 3000:3000 portfolio:local
# http://localhost:3000
```

### GitHub Actions → GHCR
The workflow `.github/workflows/docker-ghcr.yml` builds on push to `main` and pushes to GHCR.

1) Create a public GitHub repo and push this project.
2) Ensure Packages permissions are enabled (default GITHUB_TOKEN is sufficient for public).
3) On push to `main`, the image is built and pushed to `ghcr.io/<OWNER>/<REPO>:<tag>` with tags: `latest`, branch name, and `sha`.

### Kubernetes Manifests
Manifests live in `k8s/`:
- `deployment.yaml` (replicas, liveness/readiness probes hitting `/api/health`)
- `service.yaml` (NodePort 30080 → container port 3000)

Update the deployment image to your GHCR image:
```bash
kubectl set image deployment/portfolio portfolio=ghcr.io/<OWNER>/<REPO>:latest -n default
```

### Minikube Deployment
Start Minikube and load the image (two options):

Option A: Pull directly from GHCR inside the cluster (default):
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Option B: Load a locally built image into Minikube:
```bash
minikube image load ghcr.io/<OWNER>/<REPO>:latest
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### Access the App via Minikube
```bash
minikube ip
# then open http://<MINIKUBE_IP>:30080
```

### Submission
- Public repository URL
- GHCR image URL: `ghcr.io/<OWNER>/<REPO>:latest`
- Email subject: "DevOps Assessment Submission - [Your Name]"
- Email body: Include repo and image URLs

### Notes on Docker Optimization
- Multi-stage build with `output: standalone` reduces runtime size
- Caching `npm ci` and build layers improves CI speed
- `.dockerignore` excludes unnecessary files
