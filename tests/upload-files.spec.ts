import { expect } from "@playwright/test";
import { test } from "../fixtures";
import { assert } from "console";
import path from "path";

test.describe("Open main page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`https://testautomationpractice.blogspot.com/`);
    })


    test("Select a file", async ({ uploadFilesComp }) => {
      console.log(path.join(__dirname, `resources/file.pdf`));
      const filePath = path.join(__dirname, `resources/file.pdf`);
      await uploadFilesComp.chooseSingleFile(filePath);
      await uploadFilesComp.clickUploadFile();
    });

   
    // test.afterEach(async ({ datePickerComp }) => {
    //   await datePickerComp.datePicker1.clear();
    // });
  });

 