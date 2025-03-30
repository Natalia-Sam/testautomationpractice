import { expect } from "@playwright/test";
import { test } from "../fixtures";
import { assert } from "console";
import path from "path";

test.describe("Open main page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`https://testautomationpractice.blogspot.com/`);
    })


    test("Open W", async ({ page, context }) => {
      await page.locator(`.wikipedia-icon`).click();
      page = await context.waitForEvent(`page`);
      await page.bringToFront();
      const pageUrl = page.url();
      console.log(pageUrl);
    });

   
    // test.afterEach(async ({ datePickerComp }) => {
    //   await datePickerComp.datePicker1.clear();
    // });
  });