import { test, expect } from "@playwright/test";
import { config } from "../utils/config";
import data from '../data.json';

// Define the type for roles
// type Role = 'heading' | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'blockquote' | 'button' | 'caption' | 'cell' | 'checkbox' | 'code' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem';


type Role = 'heading' | 'button' | 'columnheader';

test.describe("Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
    await page.waitForLoadState("networkidle");
    await page.click('[data-cy="SignUpPageLogin"]');
    await page.waitForLoadState("networkidle");
    await page.fill('[name="loginfmt"]', config.username);
    await page.click('[value="Next"]');
    await page.waitForLoadState("networkidle");
    await page.fill('[name="passwd"]', config.password);
    await page.click('[value="Sign in"]');
    await page.waitForLoadState("networkidle");
    await page.click('[value="Yes"]');
    await page.waitForLoadState("networkidle");
  });

  data.pages.forEach((pageData:any) => {
    test(pageData.name, async ({ page }) => {
      await page.goto(pageData.url);
      await page.waitForLoadState("networkidle");

      if (pageData.get_text && Object.keys(pageData.get_text).length > 0) {
        for (const text of pageData.get_text) {
          await expect(page.getByText(text)).toBeVisible();
        }
      }

      if (pageData.get_placeholder && Object.keys(pageData.get_placeholder).length > 0) {
        for (const placeholder_text of pageData.get_placeholder) {
          await expect(page.getByPlaceholder(placeholder_text)).toBeVisible();
        }
      }

      if (pageData.get_role && Object.keys(pageData.get_text).length > 0) {
        for (const role in pageData.get_role) {
          const roleName = role as Role;
          for (const {name, exact} of pageData.get_role[role]) {
            await expect(page.getByRole(roleName,  { name, exact })).toBeVisible();
          }
        }
      }
      if (pageData.locator) {
        for (const locator in pageData.locator) {
          for (const { name, exact } of pageData.locator[locator]) {
            await expect(page.locator(locator).getByText(name, { exact })).toBeVisible();
          }
        }
      }
        // Additional debugging steps if needed
        // await page.screenshot({ path: `${pageData.name}_debug_screenshot.png` });
        // const pageContent = await page.content();
        // console.log("*******", pageContent);
    });
  });
});