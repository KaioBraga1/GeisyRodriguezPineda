import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:3100";
const OUT = "/tmp/geisy-shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  reducedMotion: "reduce",
});
const page = await context.newPage();
await page.goto(`${BASE}/pt`, { waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(400);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(300);

const shot = async (sel, name) => {
  const el = page.locator(sel);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await el.screenshot({ path: `${OUT}/sec-${name}.png` });
  console.log(`✓ ${name}`);
};

await shot("main > section:nth-child(2)", "manifesto");
await shot("#sobre", "about");
await shot("#abordagem", "approach");
await shot("#teleconsulta", "telemedicine");

// abre a primeira FAQ (já vem aberta) e captura
await shot("#perguntas", "faq");
await shot("#contato", "contact");

await browser.close();
console.log("done");
