# Daniel Ese — Engineering Portfolio

**Frontend & Full-Stack Development | AWS Cloud Engineering | DevOps**

I build web applications, cloud infrastructure, and automated delivery workflows, with a focus on practical implementation, maintainability, and reliable engineering.

My work spans React and Next.js applications, serverless AWS services, infrastructure as code, and CI/CD automation.

This repository contains my engineering portfolio: six projects documented through architectural decisions, implementation details, technologies, and supporting evidence.

## Featured projects

### 01 · Kairos ACE Commerce
**Full-stack development · E-commerce**

A commerce application covering product discovery, cart functionality, checkout, and order processing. The implementation includes server-side pricing, PostgreSQL inventory reservation, and Paystack payment verification logic.

**Stack:** Next.js, TypeScript, Prisma, PostgreSQL, Supabase, Paystack.

[View live application](https://kairosace-ecommerce-application.vercel.app/)

### 02 · TRACI Digital Gallery
**Full-stack development · Digital publishing**

A digital museum and publishing platform for curated collections, exhibitions, and individual artworks. Features include collection browsing, administrative content workflows, signed media uploads, and collector inquiries.

**Stack:** Next.js, TypeScript, PostgreSQL, Supabase.

[Explore the gallery](https://traci-gallery.vercel.app/)

### 03 · AWS Terraform Delivery
**Cloud engineering · Infrastructure as code**

AWS infrastructure configuration focused on reproducibility and automated validation. Includes Terraform resources for S3 and DynamoDB remote state, plus a GitHub Actions workflow using AWS OIDC authentication to validate and plan changes.

**Stack:** AWS, Terraform, GitHub Actions, IAM, OIDC, S3, DynamoDB.

[View repository](https://github.com/tracilvrd/aws-terraform-portfolio-infrastructure)

### 04 · TRACI Digital Agency
**Full-stack development · Business systems**

An agency website designed around service discovery, project presentation, and client inquiry management. The inquiry workflow uses server-side validation, Supabase persistence, and email notifications.

**Stack:** Next.js, TypeScript, Supabase, Resend.

### 05 · Serverless Task API
**AWS cloud engineering · Serverless**

A Python AWS Lambda handler for creating, retrieving, and deleting tasks in DynamoDB. It uses boto3, unique task identifiers, request validation, and structured JSON responses, with sample events included in the repository.

**Stack:** Python, AWS Lambda, DynamoDB, boto3.

[View repository](https://github.com/tracilvrd/serverless-task-api)

### 06 · Elite Milan Hotel Preview
**Frontend development · Hospitality**

A responsive hotel website and operations-interface prototype covering rooms, amenities, guest inquiries, and a hotel operations dashboard populated with sample data.

**Stack:** HTML, CSS, JavaScript.

## Engineering capabilities

| Area | Technologies and practices |
| --- | --- |
| Frontend | React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS |
| Backend and APIs | Python, Node.js, AWS Lambda, API Gateway, REST APIs |
| Cloud infrastructure | AWS, IAM, S3, DynamoDB, CloudWatch |
| DevOps and automation | Terraform, GitHub Actions, CI/CD, AWS OIDC |
| Data and storage | PostgreSQL, Supabase, Prisma, DynamoDB |
| Engineering practices | Responsive design, API integration, validation, version control, deployment workflows |

## About this portfolio

Built with **React, Vite, and Tailwind CSS**, this portfolio uses a minimal, responsive interface to make the engineering work easy to explore. Projects are grouped into **Frontend**, **Full-stack**, and **Cloud & DevOps** categories.

Every case study follows six sections:

1. Challenge
2. Intended goal
3. Architectural design
4. Implementation
5. Technologies used
6. Results & verification

Selected case studies include screenshots and links to live applications or public source repositories.

## Run locally

**Requirements:** Node.js and npm.

```bash
git clone https://github.com/tracilvrd/aws-cloud-engineer-portfolio.git
cd aws-cloud-engineer-portfolio
npm ci
npm run dev
```

Build the production site:

```bash
npm run build
```

Vite writes the generated static site to `dist/`.

## Hosting and deployment

This repository supports two intentional AWS delivery approaches:

- **AWS Amplify Hosting:** Git-connected hosting and builds from the repository.
- **GitHub Actions → Amazon S3:** The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the portfolio, and synchronizes `dist/` to S3 on pushes to `main`.

The S3 workflow uses GitHub Actions secrets for AWS credentials, region, and bucket configuration. The two paths are maintained to demonstrate distinct AWS hosting and deployment workflows.

## Engineering notes

- Portfolio screenshots document real project interfaces rather than fabricated product mockups.
- Some featured applications use private repositories; their implementation is documented through the public case studies.
- Infrastructure configurations and prototypes are described according to their demonstrated scope, without implying unverified production deployments.
- The project has been checked with `npm audit --omit=dev` and a successful Vite production build; development-tool dependency advisories are tracked separately.

## Connect

**Daniel Ese**

[GitHub](https://github.com/tracilvrd) · [LinkedIn](https://www.linkedin.com/in/daniel-ese/)

---

*Built to document the engineering behind the work, not just the finished interface.*
