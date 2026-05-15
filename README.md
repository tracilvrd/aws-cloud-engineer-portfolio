# AWS Cloud Engineer Portfolio

A production-style cloud-hosted portfolio demonstrating frontend engineering, AWS static hosting, managed hosting with AWS Amplify, and CI/CD automation using GitHub Actions.

This project simulates a real-world deployment pipeline used in modern cloud engineering environments and showcases both manual infrastructure configuration and fully managed cloud deployment services.

## 🧠 System Overview

This portfolio demonstrates two production-ready hosting strategies:

1. Manual AWS Deployment
* React + Vite frontend application
* Amazon S3 static website hosting
* GitHub Actions CI/CD pipeline
* IAM-based secure deployment

2. Managed AWS Deployment
* AWS Amplify Hosting
* Automatic HTTPS and CDN
* Continuous deployment from GitHub
* Branch-based preview environments

Together, these approaches demonstrate both foundational AWS knowledge and practical use of managed cloud services.

## 🏗️ Architecture
flowchart LR
    A[Developer Push] --> B[GitHub Repository]

    B --> C[GitHub Actions CI/CD]
    C --> D[Build React App (Vite)]
    D --> E[Generate dist/]
    E --> F[Deploy to Amazon S3]
    F --> G[S3 Static Website Hosting]

    B --> H[AWS Amplify]
    H --> I[Automatic Build & Deploy]
    I --> J[HTTPS + Global CDN]
    J --> K[Production Portfolio URL]


## 🚀 CI/CD Pipeline (GitHub Actions)

On every push to the main branch, the pipeline:

* Checks out the repository
* Installs dependencies
* Builds the production bundle using Vite
* Syncs the dist/ directory to the S3 bucket
* Deletes outdated files for deployment consistency

This creates a fully automated, zero-manual deployment workflow.

## ☁️ AWS Infrastructure
1. Amazon S3
* Static website hosting enabled
* index.html as entry point
* error.html fallback for SPA routing
* Public read access to website assets

2. IAM
Deployment credentials are restricted to the minimum required permissions:

* s3:PutObject
* s3:DeleteObject
* s3:ListBucket

3. AWS Amplify
* Connected directly to GitHub
* Builds and deploys automatically on every push
* Provides HTTPS and CDN by default
* Hosts the production portfolio using AWS-managed infrastructure

## 🔄 Deployment Flow
Git Push
   ├── GitHub Actions → Build (Vite) → dist/ → Amazon S3 → Static Website
   └── AWS Amplify → Build & Deploy → HTTPS CDN → Live Portfolio

## 💻 Local Development
npm install
npm run dev

Application runs locally at:

http://localhost:5173

## 🏗️ Production Build
npm run build

Build output:

dist/


## 📤 Manual Deployment (Optional)
aws s3 sync dist s3://YOUR_BUCKET_NAME --delete


## 🔐 GitHub Secrets Required
Configure the following repository secrets:

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* AWS_REGION
* S3_BUCKET_NAME


## 🌍 Live Deployment
1. AWS Amplify URL
https://main.d17g8gq00m7fcs.amplifyapp.com/

2. Amazon S3 Website Endpoint
http://daniel-ese-cloud-portfolio.s3-website-us-east-1.amazonaws.com/


## 🚀 Production Enhancements
* Amazon CloudFront CDN (manual architecture)
* Amazon Route 53 custom domain
* Custom SSL certificates
* Cache invalidation on deploy
* Monitoring and logging with Amazon CloudWatch

## 📚 What This Project Demonstrates
1. Frontend engineering with React and Vite
2. Amazon S3 static website hosting
3. CI/CD automation using GitHub Actions
4. Secure IAM-based deployment workflows
5. Managed hosting with AWS Amplify
6. CDN-backed HTTPS delivery
7. Practical cloud architecture design


## 🗂️ Portfolio Project Alignment
This project serves as the foundation of a larger cloud engineering portfolio:

1. Static Website Hosting with Amazon S3
2. CI/CD Automation with GitHub Actions
3. Serverless APIs with AWS Lambda and API Gateway
4. Infrastructure as Code with Terraform
5. Managed Hosting with AWS Amplify


## 👤 Author
Ese Daniel
Cloud Engineer | Frontend Developer | DevOps Enthusiast