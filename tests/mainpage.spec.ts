import { expect } from "@playwright/test";
import { test } from "../fixtures";
import { assert } from "console";

const name = "Natalia";
const email = "mytest.111888@gmail.com";
const phone = "0123456789";
const address = "7101 Georgia Avenue Northwest, Washington, DC, USA";

// В describe (test suit) - можу зберігати і beforeeach/aftereach і т.д
test.describe("Open main page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://testautomationpractice.blogspot.com/`);
  });

  test("Validate entered name", async ({ page, blogspotPage }) => {
    await expect(blogspotPage.nameInput).toBeEmpty();
    await blogspotPage.enterName(name);
    await expect(blogspotPage.nameInput).toHaveValue(name);
    // await expect(blogspotPage.nameInput).toHaveText('Natalia');
    await expect(name.length).toBeLessThanOrEqual(10);
    await expect(name).toMatch(/^[A-Z][A-Za-z\s'-]*$/);
    await expect(blogspotPage.nameInput).toHaveValue(/^[A-Z][A-Za-z\s'-]{1,10}$/);
  });

  test("Validate entered email", async ({ page, blogspotPage }) => {
    await expect(blogspotPage.emailInput).toBeEmpty();
    await blogspotPage.enterEmail(email);
    await expect(blogspotPage.emailInput).toHaveValue(email);
    // await expect(blogspotPage.emailInput).toHaveText('mytest.111888@gmail.com');
    // await expect(blogspotPage.emailInput).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  test("Validate entered phone", async ({ page, blogspotPage }) => {
    await expect(blogspotPage.phoneInput).toBeEmpty();
    await blogspotPage.enterPhone(phone);
    await expect(blogspotPage.phoneInput).toHaveValue(phone);
    await expect(blogspotPage.phoneInput).not.toBeEmpty();
    // await expect(blogspotPage.phoneInput).toMatch(/d{5,10}/);
  });

  test("Validate entered address", async ({ page, blogspotPage }) => {
    await expect(blogspotPage.addressInput).toBeEmpty();
    await blogspotPage.enterAddress(address);
    await expect(blogspotPage.addressInput).toHaveValue(address);
    await expect(blogspotPage.addressInput).not.toBeEmpty();
  });

  test("Select male gender", async ({ page, blogspotPage }) => {
    await blogspotPage.selectMaleGender();
    await expect(blogspotPage.maleSelector).toBeChecked;
    await expect(blogspotPage.femaleSelector).not.toBeChecked;
  });
  

});
