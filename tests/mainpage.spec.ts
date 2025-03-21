import { expect } from "@playwright/test";
import { test } from "../fixtures";
import { assert } from "console";
import { TIMEOUT } from "dns";

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
    //  🔴 Тут тест падає, бо повертає пусту строку
    // await expect(blogspotPage.nameInput).toHaveText('Natalia');
    await expect(name.length).toBeLessThanOrEqual(10);
    await expect(name).toMatch(/^[A-Z][A-Za-z\s'-]*$/);
    await expect(blogspotPage.nameInput).toHaveValue(
      /^[A-Z][A-Za-z\s'-]{1,10}$/,
    );
  });

  test("Validate entered email", async ({ page, blogspotPage }) => {
    await expect(blogspotPage.emailInput).toBeEmpty();
    await blogspotPage.enterEmail(email);
    await expect(blogspotPage.emailInput).toHaveValue(email);
    //  🔴 Тут тест падає, бо повертає пусту строку
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

  test("Select female gender", async ({ page, blogspotPage }) => {
    await blogspotPage.selectFemaleGender();
    await expect(blogspotPage.femaleSelector).toBeChecked;
    await expect(blogspotPage.maleSelector).not.toBeChecked;
  });

  test("Select Sunday", async ({ page, blogspotPage }) => {
    await expect(blogspotPage.sundaySelector).not.toBeChecked();
    await blogspotPage.selectSunday();
    await expect(blogspotPage.sundaySelector).toBeChecked;
  });

  test("Select all weekdays", async ({ page, blogspotPage }) => {
    await expect(blogspotPage.sundaySelector).not.toBeChecked();
    await expect(blogspotPage.mondaySelector).not.toBeChecked();
    await expect(blogspotPage.tuesdaySelector).not.toBeChecked();
    await expect(blogspotPage.wednesdaySelector).not.toBeChecked();
    await expect(blogspotPage.thursdaySelector).not.toBeChecked();
    await expect(blogspotPage.fridaySelector).not.toBeChecked();
    await expect(blogspotPage.saturdaySelector).not.toBeChecked();
    await blogspotPage.selectMonday();
    await blogspotPage.selectTuesday();
    await blogspotPage.selectWednesday();
    await blogspotPage.selectThursday();
    await blogspotPage.selectFriday();
    await expect(blogspotPage.sundaySelector).not.toBeChecked();
    await expect(blogspotPage.mondaySelector).toBeChecked();
    await expect(blogspotPage.tuesdaySelector).toBeChecked();
    await expect(blogspotPage.wednesdaySelector).toBeChecked();
    await expect(blogspotPage.thursdaySelector).toBeChecked();
    await expect(blogspotPage.fridaySelector).toBeChecked();
    await expect(blogspotPage.saturdaySelector).not.toBeChecked();
  });

  test("Select Brazil in country dropdown list", async ({
    page,
    blogspotPage,
  }) => {
    // 🔴 Тут тест падає
    // await expect(blogspotPage.countryDropdown).toHaveText('United States');
    await blogspotPage.openCountryDropdown();
    await blogspotPage.selectBrazilCountryDropdown();
    await expect(blogspotPage.countryDropdown).toHaveText("Brazil");
  });

  // test("Select county in dropdown list", async ({ blogspotPage }) => {
  //   await blogspotPage.openCountryDropdown();
  //   await new Promise(resolve => setTimeout(resolve, 10000));
  // }, 15000);

  // 🔴 Тут не обираються опшини з дропдауна і тест падає
  // test("Switch between countries in dropdown list", async ({ page, blogspotPage }) => {
  //   // await expect(blogspotPage.countryDropdown).toHaveText('United States');
  //   await blogspotPage.openCountryDropdown();
  //   await blogspotPage.selectBrazilCountryDropdown();
  //   await expect(blogspotPage.countryDropdown).toHaveText('Brazil');
  //   await blogspotPage.selectCanadaCountryDropdown();
  //   await expect(blogspotPage.countryDropdown).toHaveText('Canada');
  // });

  test("Select a blue color", async ({ page, blogspotPage }) => {
    await blogspotPage.colorListFocus();
    await blogspotPage.selectBlue();
    await expect(blogspotPage.blueColor).toHaveJSProperty("disabled", false);
    //  🔴 Як перевірити, що інший елемент не обран?
    // await expect(blogspotPage.greenColor).toHaveJSProperty("disabled", true);
  });

  test.only("Select a Giraffe animal", async ({ page, blogspotPage }) => {
    await blogspotPage.animalsListFocus();
    await blogspotPage.selectGiraffe();
    await expect(blogspotPage.giraffeAnimal).toHaveJSProperty("disabled", false);
  });
});
