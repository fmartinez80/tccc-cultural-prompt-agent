// End-to-end run of the intake in headless Chromium. Usage:
//   BASE_URL=http://localhost:5180 OUT=./out node tests/e2e.mjs
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";

const base = process.env.BASE_URL || "http://localhost:5173";
const out = process.env.OUT || "out";
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
page.on("console", (m) => m.type() === "error" && console.log("[browser]", m.text()));
const shot = (n) => page.screenshot({ path: `${out}/${n}.png`, fullPage: true });
const next = async (label = "Continue") => page.getByRole("button", { name: label, exact: true }).click();
const pickFirstCard = async () => {
  await page.locator(".card").first().waitFor({ timeout: 180000 });
  await page.locator(".card").first().click();
};

await page.goto(base);
await page.locator("select").first().waitFor();
const selects = page.locator("select");
await selects.nth(0).selectOption(process.env.COUNTRY || "united_states");
if (process.env.REGION !== "") await selects.nth(1).selectOption(process.env.REGION || "us-texas").catch(() => {});
await page.getByLabel("Operating unit").fill(process.env.OU || "north_america");
await page.getByLabel("Product SKU").selectOption(process.env.SKU || "coke-original-355ml-can");
await page.getByLabel("Hero dish").fill(process.env.DISH || "tacos al pastor");
await page.getByLabel(/Side dish request/).fill(process.env.SIDE || "frijoles charros");
await page.getByLabel("Occasion").selectOption(process.env.OCCASION || "weekday-lunch");
await shot("01-brief");
await next();
for (const [i, name] of [["02", "prep"], ["03", "plating"], ["04", "sides"]]) {
  await pickFirstCard();
  await shot(`${i}-${name}`);
  await next();
}
// Scene
await page.getByRole("button", { name: process.env.VENUE || "At a restaurant" }).click();
if ((process.env.VENUE || "") === "On the go") await pickFirstCard();
const glass = page.getByRole("button", { name: "Yes, add a glass" });
if (process.env.GLASS === "yes" && (await glass.count())) await glass.click();
await shot("05-scene");
await next();
if (process.env.LOOK) await page.getByRole("button", { name: process.env.LOOK }).click();
if (process.env.ANGLE) await page.getByRole("button", { name: process.env.ANGLE }).click();
await shot("06-camera");
await next();
// Accent (may be skipped)
await page.waitForSelector("h1:has-text('accent'), h1:has-text('Composition check')", { timeout: 60000 });
await page.waitForFunction(() => !document.body.innerText.includes("Counting the table items"), null, { timeout: 60000 });
if (await page.locator("h1:has-text('accent')").count()) await pickFirstCard();
await shot("07-accent");
await next();
await page.locator(".layout img").first().waitFor({ timeout: 120000 });
await page.waitForTimeout(500);
await shot("08-layouts");
const n = await page.locator(".layout").count();
console.log("layout options:", n);
await page.locator(".layout").first().click();
await next("Use this layout");
await page.locator("h2:has-text('Scene Summary')").waitFor({ timeout: 300000 });
await page.getByRole("button", { name: "Validate the story" }).click();
await page.waitForSelector(".pass-badge, .fail-box", { timeout: 300000 });
await shot("09-story");
const proxy = await page.locator("img.proxy").getAttribute("src");
writeFileSync(`${out}/proxy.png`, Buffer.from(proxy.split(",")[1], "base64"));
writeFileSync(`${out}/prompt-composition.txt`, await page.locator("pre.prompt").nth(0).innerText());
writeFileSync(`${out}/prompt-product-swap.txt`, await page.locator("pre.prompt").nth(1).innerText());
console.log("done");
await browser.close();
