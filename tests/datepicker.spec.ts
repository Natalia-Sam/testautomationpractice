import { expect } from "@playwright/test";
import { test } from "../fixtures";
import { assert } from "console";

test.describe("Open main page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`https://testautomationpractice.blogspot.com/`);
    });
  
    // // 🔴 TypeError: textboxes is not iterable
    // test.afterEach(async ({ page }) => {
    //   const textboxes = await page.getByRole('textbox');
    //   for (const textbox of textboxes) {
    //     await textbox.clear();
    //   }
    // });

    test.afterEach(async ({ page }) => {
      await page.locator('#datepicker').clear();
    });

    test("Select a date in the current month", async ({ datePickerComp }) => {
      await datePickerComp.openDatepicker1();
      await datePickerComp.selectDate(10);
      await expect(datePickerComp.datePicker1).toHaveValue('03/10/2025');
    });

    test("Select a date in the previous month", async ({ datePickerComp }) => {
      await datePickerComp.openDatepicker1();
      await datePickerComp.selectPreviousmonth();
      await datePickerComp.selectDate(1);
      await expect(datePickerComp.datePicker1).toHaveValue('02/01/2025');
    });

    test("Select a date in the next month", async ({ datePickerComp }) => {
      await datePickerComp.openDatepicker1();
      await datePickerComp.selectNextmonth();
      await datePickerComp.selectDate(28);
      await expect(datePickerComp.datePicker1).toHaveValue('04/28/2025');
    });
  });

 