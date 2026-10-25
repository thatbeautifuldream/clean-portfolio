This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## PDF download

`pnpm build` builds Next.js, then runs `scripts/generate-pdf.mjs`. The script
briefly starts the production app on a local port, renders `/` with its print
styles, and writes `public/resume.pdf`. Build failure includes PDF generation
failure, so a successful deployment always has a PDF matching its homepage.

`/pdf` serves that static file with a download filename of
`milind-mishra-resume.pdf`. No browser or PDF generation runs at request time.
The file is generated once per build/deployment and excluded from git. Normal
static-file ETag revalidation prevents browsers from keeping an old deployment's
PDF. Use `pnpm build` as the deployment build command (not `next build` directly).

Chromium and Puppeteer are build-only dev dependencies. Linux builders use bundled
`@sparticuz/chromium`; on macOS/Windows install Google Chrome, or set
`PUPPETEER_EXECUTABLE_PATH` to a compatible Chrome/Chromium executable. The override
also works on Linux builders with system Chrome.

After a build, `pnpm pdf:generate` regenerates only the PDF from that build. During
`pnpm dev`, `/pdf` serves the last generated PDF; run `pnpm build` to refresh it.

Husky runs `pnpm build` before every commit, regenerating the PDF and blocking the
commit if the build or PDF generation fails. `pnpm install` installs the hooks
through the `prepare` script. The PDF stays out of git and is also regenerated
by deployment builds. The hook renders the current working tree, including any
unstaged changes.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
