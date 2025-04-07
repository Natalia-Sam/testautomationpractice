import { expect } from "@playwright/test";
import { test } from "../fixtures";
import { assert } from "console";
import path from "path";
import TabComp from "../pages/components/tab-comp";

const value = "cat";

test.describe("Open main page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://testautomationpractice.blogspot.com/`);
  });

  // test("Open Wikipedia tab", async ({ page, tabComp, context }) => {
  //   await tabComp.openWikipediaTab();
  //   page = await context.waitForEvent(`page`);
  //   await page.bringToFront();
  //   const pageUrl = page.url();
  //   expect(pageUrl).toEqual(`https://en.wikipedia.org/wiki/Main_Page`);
  //   expect(
  //     page.getByRole("heading", { name: "Welcome to Wikipedia" }),
  //   ).toContainText("Welcome to");
  // });

  test("Search using Wikipedia input", async ({ page, tabComp, context }) => {
    await tabComp.searchWikipediaInput(value);
    await page.keyboard.press("Enter");
    // await tabComp.pressWikipediaSearchButton();
    const serchResalts = await tabComp.wikipediaSearchResult.all();
    // serchResalts.forEach(result => {
    //   expect(result).toContainText(value, { ignoreCase: true });
    // });

    for (const result of serchResalts) {
      await expect(result).toContainText(value, { ignoreCase: true });
    }

    await serchResalts[0].click();
    const newPage = await context.waitForEvent(`page`);
    await newPage.bringToFront();
    const pageUrl = newPage.url();
    expect(pageUrl).toContain(`wikipedia.org/wiki`);
    // await expect(page.locator(".mw-page-title-main")).toContainText(value, {
    //   ignoreCase: true,
    // });
    const pageTitle = newPage.locator(".mw-page-title-main");
    await expect(pageTitle).toContainText(value, { ignoreCase: true });
  });

  // test.afterEach(async ({ context }) => {
  //   context.close();
  // });

  test.afterEach(async ({ context }) => {
    const pages = context.pages();
    for (const page of pages) {
      if (
        !page.url().includes("https://testautomationpractice.blogspot.com/")
      ) {
        await page.close();
      }
    }
  });

  // npx playwright test tests/tab-tests.spec.ts --ui
});
