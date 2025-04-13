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

    //____________________________

  // test("Search using Wikipedia input", async ({ page, tabComp, context }) => {
  //   test.setTimeout(45000);
  //   await tabComp.searchWikipediaInput(value);
  //   // await page.keyboard.press("Enter");
  //   // await tabComp.pressWikipediaSearchButton();
  //   await page.locator('.wikipedia-search-button').hover();
  //   await page.locator('.wikipedia-search-button').click({clickCount: 2});

  //   const searchresults = await page.locator('#wikipedia-search-result-link a').all();
  //   // const serchResalts = await tabComp.wikipediaSearchResult.all();
  //   // serchResalts.forEach(result => {
  //   //   expect(result).toContainText(value, { ignoreCase: true });
  //   // });

  //   for (const result of serchResalts) {
  //     await expect(result).toContainText(value, { ignoreCase: true });
  //   }

  //   // await serchResalts[0].click();
  //   console.log('serchResalts.length', searchresults);
  //   await searchresults[0].hover();
  //   await searchresults[0].click({force: true});
  //   const newPage = await context.waitForEvent(`page`);
  //   const all = context.pages();
  //   console.log(all, all.length);
  //   await newPage.bringToFront();
  //   const pageUrl = newPage.url();
  //   expect(pageUrl).toContain(`wikipedia.org/wiki`);
  //   // await expect(page.locator(".mw-page-title-main")).toContainText(value, {
  //   //   ignoreCase: true,
  //   // });
  //   const pageTitle = newPage.locator(".mw-page-title-main");
  //   await expect(pageTitle).toContainText(value, { ignoreCase: true });
  // });

  //____________________________

  test.only("Search using Wikipedia input", async ({ page, tabComp, context }) => {
    test.setTimeout(45000);
    await tabComp.searchWikipediaInput(value);
    await page.locator('.wikipedia-search-button').click();
    await page.locator('.wikipedia-search-results-header').waitFor({timeout: 1000});
    const searchresults = await page.locator('#wikipedia-search-result-link a').all();

    console.log('serchResalts.length', searchresults);
    await searchresults[0].click();
    const newPage = await context.waitForEvent(page);
    await newPage.bringToFront();
    const pageUrl = newPage.url();
    expect(pageUrl).toContain(wikipedia.org/wiki);
    const pageTitle = newPage.locator('header .mw-page-title-main');
    await expect(pageTitle).toContainText(value, { ignoreCase: true });
  });

  // test.afterEach(async ({ context }) => {
  //   context.close();
  // });

  // test.afterEach(async ({ context }) => {
  //   const pages = context.pages();
  //   for (const page of pages) {
  //     if (
  //       !page.url().includes("https://testautomationpractice.blogspot.com/")
  //     ) {
  //       await page.close();
  //     }
  //   }
  // });

  // npx playwright test tests/tab-tests.spec.ts --ui
});
