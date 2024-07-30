import { Browser, Page, chromium } from "@playwright/test";

async function globalSetup() {
  const browser: Browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto("https://gifna-test.who.int/login");
  await page.click('[data-cy="SignUpPageLogin"]');
await page.waitForLoadState("networkidle");
await page.fill('[name="loginfmt"]', 'suresh.c@adappt.ai');
await page.click('[value="Next"]');
await page.waitForLoadState("networkidle");
await page.fill('[name="passwd"]', 'SmartWork#321');  
await page.click('[value="Sign in"]');
await page.waitForLoadState("networkidle");
await page.click('[value="Yes"]');
  // Save the state of the webpage - meaning we are logged in
  await page.context().storageState({ path: "./LoginAuth.json" });
  // Dont forget your clean up :)
  await browser.close();
}

export default globalSetup;