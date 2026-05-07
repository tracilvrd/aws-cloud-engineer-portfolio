# AWS Cloud Engineer Portfolio

Static portfolio site built with React + Vite for cloud engineering roles.

## Edit Content Quickly

Update only these data files (no component edits required):

- `src/data/profile.js` for Hero/About
- `src/data/certifications.js` for Certifications
- `src/data/serverlessArchitectureSuite.js` for the Projects / featured case study

## Contact Form (Formspree)

1. Create a Formspree form at [https://formspree.io](https://formspree.io).
2. Copy your endpoint (example: `https://formspree.io/f/abcxyzpq`).
3. Replace `FORMSPREE_ENDPOINT` in `src/components/ContactForm.jsx`.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Build output is generated in `dist/`.

## Deploy to Amazon S3

### 1) Create and configure bucket

- Create an S3 bucket (example: `my-cloud-portfolio-site`).
- Enable **Static website hosting**.
- Set `index document` to `index.html`.
- Set `error document` to `index.html` (useful for SPA routes).

### 2) Upload build artifacts

```bash
aws s3 sync dist s3://my-cloud-portfolio-site --delete
```

### 3) Optional hardening and production setup

- Put CloudFront in front of S3 for HTTPS and better caching.
- Add a custom domain with Route 53.
- Restrict bucket access depending on S3 website endpoint vs CloudFront setup.

## Notes on Vite + S3

This project uses `base: "./"` in `vite.config.js` so generated asset URLs are relative and work reliably for static S3 hosting.
