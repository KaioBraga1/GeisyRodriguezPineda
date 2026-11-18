import { chromium } from "playwright";
const BASE = "http://localhost:3100";
const OUT = "/tmp/geisy-shots";

const browser = await chromium.launch();

// 1) Menu mobile aberto
{
  const c = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const p = await c.newPage();
  await p.goto(`${BASE}/pt`, { waitUntil: "networkidle" });
  await p.getByRole("button", { name: /abrir menu/i }).click();
  await p.waitForTimeout(500);
  await p.screenshot({ path: `${OUT}/mobile-menu.png` });
  // navega por um link do menu
  await p.locator("#mobile-menu").getByRole("link", { name: "Teleconsulta" }).click();
  await p.waitForTimeout(600);
  const scrolledY = await p.evaluate(() => window.scrollY);
  console.log("menu link scroll y:", scrolledY, scrolledY > 100 ? "OK" : "FAIL");
  await c.close();
}

// 2) Botão flutuante aparece após rolar
{
  const c = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const p = await c.newPage();
  await p.goto(`${BASE}/pt`, { waitUntil: "networkidle" });
  await p.evaluate(() => window.scrollTo(0, window.innerHeight * 2));
  await p.waitForTimeout(700);
  const fab = p.getByRole("link", { name: /agendar pelo whatsapp/i }).last();
  const visible = await fab.isVisible();
  console.log("floating whatsapp visible after scroll:", visible ? "OK" : "FAIL");
  await p.screenshot({ path: `${OUT}/mobile-fab.png` });
  await c.close();
}

// 3) Troca de idioma
{
  const c = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const p = await c.newPage();
  await p.goto(`${BASE}/pt`, { waitUntil: "networkidle" });
  await p.getByRole("link", { name: /cambiar a español/i }).click();
  await p.waitForURL(/\/es$/, { timeout: 5000 }).catch(() => {});
  console.log("lang switch url:", p.url(), /\/es/.test(p.url()) ? "OK" : "FAIL");
  await c.close();
}

// 4) Foco visível por teclado (Tab até o CTA do header)
{
  const c = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const p = await c.newPage();
  await p.goto(`${BASE}/pt`, { waitUntil: "networkidle" });
  await p.keyboard.press("Tab");
  await p.keyboard.press("Tab");
  await p.waitForTimeout(200);
  await p.screenshot({ path: `${OUT}/keyboard-focus.png` });
  const active = await p.evaluate(() => document.activeElement?.textContent);
  console.log("focused element text:", JSON.stringify(active));
  await c.close();
}

await browser.close();
console.log("interactions done");
