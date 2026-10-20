# Engineering Portfolio — Six-section case studies

This release preserves the approved V4 visual design and changes the public project detail format to:

1. Challenge
2. Intended goal
3. Architectural design
4. Implementation
5. Technologies used
6. Results & verification

Engineering reflection, limitations and proposed future improvements are intentionally omitted from public case-study sections; reserve them for interviews. Verification language remains careful: source inspection is not equivalent to live-site or test execution. Candidate deployment URLs have been removed from the public UI pending verification.

## Run

```bash
npm ci
npm run dev
```

To test a production build: `npm run build`.

## Outstanding work

Authentic screenshots; live-site verification; deeper security review; production build and test execution. No GitHub repositories were changed.

## V5 screenshot integration

Kairos ACE (six captures) and TRACI Gallery (eight captures) are now integrated into their case studies, with a real screenshot on each corresponding project card. Clicking an evidence image opens the original full-page view. All evidence images were sourced from user-provided browser captures and only re-encoded as WebP; no AI-generated mockups were used. The latest corrected checkout and TRACI mobile homepage were selected.

**Remaining:** third-party floating overlays are still visible in some images and require controlled image editing or fresh captures without extensions; live-site testing, security review, and validation of production behavior remain open. Do not describe these as completed.

## V6 external project links

Case studies now include new-tab links for Kairos ACE and TRACI Gallery live sites, and public GitHub repositories for AWS Terraform Delivery and Serverless Task API. Private repositories remain unlinked. External links use `target="_blank"` and `rel="noopener noreferrer"`.

Live-site URLs were sourced from the browser capture domains; full end-to-end site functionality and uptime are not independently certified. The approved six-section layout and screenshot assets are unchanged.
