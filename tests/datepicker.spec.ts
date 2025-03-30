import { expect } from "@playwright/test";
import { test } from "../fixtures";
import { assert } from "console";

test.describe("Open main page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`https://testautomationpractice.blogspot.com/`);
    });

  
    // // 🔴 TypeError: textboxes is not iterable
    // test.afterEach(async ({ page, datePickerComp }) => {
    //   const textboxes = await page.getByRole('textbox').all();
    //   for (const textbox of textboxes) {
    //     console.log(await textbox.innerText());
    //     await textbox.clear();
    //   }
    // });


    test("Select a date in the current month", async ({ datePickerComp }) => {
      await datePickerComp.openDatepicker1();
      await datePickerComp.selectDate(10);
      await expect(datePickerComp.datePicker1).toHaveValue('03/10/2025');
    });

    test("Select a date in the previous month", async ({ datePickerComp }) => {
      await datePickerComp.openDatepicker1();
      await datePickerComp.selectPreviousMonth();
      await datePickerComp.selectDate(1);
      await expect(datePickerComp.datePicker1).toHaveValue('02/01/2025');
    });

    test("Select a date in the next month", async ({ datePickerComp }) => {
      await datePickerComp.openDatepicker1();
      await datePickerComp.selectNextMonth();
      await datePickerComp.selectDate(28);
      await expect(datePickerComp.datePicker1).toHaveValue('04/28/2025');
    });

    test.only("Set date", async ({ datePickerComp }) => {
      await datePickerComp.openDatepicker1();
      const testDate = new Date(2025, 12, 1) // December 1st, 2025.
      await datePickerComp.setDate(testDate);
      await expect(datePickerComp.datePicker1).toHaveValue('12/01/2025');
    });

    test.afterEach(async ({ datePickerComp }) => {
      await datePickerComp.datePicker1.clear();
    });
  });

 