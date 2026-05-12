# AWS Cloud Engineer Portfolio

A production-style cloud-hosted portfolio demonstrating **frontend engineering + AWS static hosting + CI/CD automation using GitHub Actions**.

This project simulates a real-world deployment pipeline used in modern cloud engineering environments.

---

## 🧠 System Overview

This portfolio is designed as a **fully automated static hosting pipeline**:

- React + Vite frontend application
- AWS S3 static website hosting
- GitHub Actions CI/CD pipeline
- IAM-based secure deployment

---

## 🏗️ Architecture

```mermaid
flowchart LR
A[Developer Push] --> B[GitHub Repository]
B --> C[GitHub Actions CI/CD]
C --> D[Build React App (Vite)]
D --> E[Generate dist/]
E --> F[Deploy to AWS S3]
F --> G[S3 Static Website Hosting]

## Project Structure
aws-cloud-engineer-portfolio/
├── dist/            # Production build output (generated)
├── src/             # React application source code
├── public/          # Static assets
├── package.json
├── vite.config.js
└── .github/workflows/deploy.yml

## CI/CD Pipeline (GitHub Actions)
On every push to main, the pipeline:

1. Checks out repository
2. Installs dependencies
3. Builds production bundle using Vite
4. Syncs dist/ to S3 bucket
5. Deletes outdated files for consistency

This ensures zero-manual deployment workflow.

## AWS Infrastructure
S3 Configuration
* Static website hosting enabled
* index.html as entry point
* error.html fallback for SPA routing

IAM Permissions
Deployment user requires:
 - s3:PutObject
 - s3:DeleteObject
 - s3:ListBucket

🚀 Deployment Flow
Git Push → GitHub Actions → Build (Vite) → dist/ → S3 Sync → Live Website

💻 Local Development
npm install
npm run dev

App runs locally at:
http://localhost:5173

📦 Production Build
npm run build

Output:
dist/

☁️ Manual Deployment (Optional)
aws s3 sync dist s3://YOUR_BUCKET_NAME --delete


🔐 GitHub Secrets Required
Add the following in repository settings:
* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* AWS_REGION
* S3_BUCKET_NAME

🌐 Production Enhancements (Optional Upgrades)
* CloudFront CDN (global caching + HTTPS)
* Route 53 custom domain
* Cache invalidation on deploy
* Versioned deployments for rollback
* Logging via CloudWatch

📊 What This Project Demonstrates
* AWS S3 static hosting architecture
* CI/CD automation with GitHub Actions
* Secure IAM-based deployment workflow
* Frontend build optimization (Vite)
* Cloud-native deployment thinking