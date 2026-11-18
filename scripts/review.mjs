import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
const BASE = "http://localhost:3000";
const OUT = "/tmp/geisy-shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const c = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  reducedMotion: "reduce",
});
const p = await c.newPage();
await p.goto(`${BASE}/pt`, { waitUntil: "networkidle" });
await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await p.waitForTimeout(500);
await p.evaluate(() => window.scrollTo(0, 0));
await p.waitForTimeout(400);

await p.screenshot({ path: `${OUT}/v2-hero.png` });
await p.screenshot({ path: `${OUT}/v2-full.png`, fullPage: true });

const shot = async (sel, name) => {
  const el = p.locator(sel);
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(250);
  await el.screenshot({ path: `${OUT}/v2-${name}.png` });
};
await shot("main > section:nth-child(2)", "highlights");
await shot("#sobre", "about");

await browser.close();
console.log("done");
