import { createServer } from "node:http";
import { writeFile } from "node:fs/promises";
import next from "next";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

// Render the production build, so the PDF and deployed homepage always match.
const app = next({ dev: false, hostname: "127.0.0.1" });
const server = createServer(app.getRequestHandler());
let browser;

try {
  await app.prepare();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  browser = await puppeteer.launch({
    ...(process.platform === "linux" && !executablePath
      ? {
          executablePath: await chromium.executablePath(),
          args: chromium.args,
          headless: "shell",
        }
      : executablePath
        ? { executablePath }
        : { channel: "chrome" }),
    timeout: 30_000,
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(30_000);
  await page.setViewport({ width: 1280, height: 900 });
  await page.emulateMediaType("print");
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "light" },
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);
  const response = await page.goto(`http://127.0.0.1:${server.address().port}/`, {
    waitUntil: "networkidle0",
  });
  if (!response?.ok()) throw new Error("Could not load the built homepage");
  await page.waitForSelector("main h1");
  await page.evaluate(async () => { await document.fonts.ready; });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
  });
  await writeFile(new URL("../public/resume.pdf", import.meta.url), pdf);
  console.log(`Generated public/resume.pdf (${pdf.byteLength} bytes)`);
} finally {
  await browser?.close();
  server.closeAllConnections();
  if (server.listening) await new Promise((resolve) => server.close(resolve));
  await app.close();
}
