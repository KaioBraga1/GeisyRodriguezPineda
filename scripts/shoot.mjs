import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:3100";
const OUT = "/tmp/geisy-shots";
mkdirSync(OUT, { recursive: true });

const targets = [
  { name: "pt-desktop", url: `${BASE}/pt`, w: 1440, h: 900, full: true },
  { name: "pt-mobile", url: `${BASE}/pt`, w: 390, h: 844, full: true },
  { name: "es-desktop", url: `${BASE}/es`, w: 1440, h: 900, full: true },
  { name: "pt-hero-desktop", url: `${BASE}/pt`, w: 1440, h: 900, full: false },
  { name: "pt-hero-mobile", url: `${BASE}/pt`, w: 390, h: 844, full: false },
];

const browser = await chromium.launch();
const allErrors = [];

for (const t of targets) {
  const context = await browser.newContext({
    viewport: { width: t.w, height: t.h },
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(`PAGEERROR: ${e.message}`));

  await page.goto(t.url, { waitUntil: "networkidle" });
  // rola para acionar observers e volta ao topo
  await page.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const step = () => {
        window.scrollTo(0, y);
        y += window.innerHeight;
        if (y < document.body.scrollHeight) setTimeout(step, 30);
        else setTimeout(r, 150);
      };
      step();
    });
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);

  await page.screenshot({
    path: `${OUT}/${t.name}.png`,
    fullPage: t.full,
  });
  if (errors.length) allErrors.push({ target: t.name, errors });
  await context.close();
  console.log(`✓ ${t.name}`);
}

await browser.close();

if (allErrors.length) {
  console.log("\n⚠ CONSOLE/PAGE ERRORS:");
  console.log(JSON.stringify(allErrors, null, 2));
} else {
  console.log("\n✓ Nenhum erro de console.");
}
