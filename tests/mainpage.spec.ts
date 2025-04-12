import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { user } from '../data/users';
import { Country } from '../data/countries';

test.describe('Open main page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`https://testautomationpractice.blogspot.com/`);
    });

    test.afterEach(async ({ page }) => {
        //clean data
        await page.getByRole('textbox').clear();
    });
});

test('Validate entered name', async ({ page, blogspotPage }) => {
    await page.getByRole('textbox', { name: 'Enter Name' }).fill(user.name);
    await expect(blogspotPage.nameInput).toHaveValue(user.name);
    await expect(blogspotPage.nameInput).toHaveValue('Natalia');
    expect.soft(user.name.length).toBeLessThanOrEqual(15);
    // expect.soft(name).toMatch(/^[A-Z][A-Za-z\s'-]*$/);
    // await expect(blogspotPage.nameInput).toHaveValue(/^[A-Z][A-Za-z\s'-]{1,15}$/);
});

test('Validate entered email', async ({ blogspotPage }) => {
    await expect(blogspotPage.emailInput).toBeEmpty();
    await blogspotPage.enterEmail(user.email);
    // const emailText = await blogspotPage.emailInput.innerText();
    await expect(blogspotPage.emailInput).toHaveValue(user.email);
    await expect(blogspotPage.emailInput).toHaveValue('mytest.111888@gmail.com');
    // await expect(blogspotPage.emailInput).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});

test('Validate entered phone', async ({ blogspotPage }) => {
    await expect(blogspotPage.phoneInput).toBeEmpty();
    await blogspotPage.enterPhone(user.phone);
    await expect(blogspotPage.phoneInput).toHaveValue(user.phone);
    await expect(blogspotPage.phoneInput).not.toBeEmpty();
    // await expect(blogspotPage.phoneInput).toMatch(/d{5,10}/);
});

test('Validate entered address', async ({ blogspotPage }) => {
    await expect(blogspotPage.addressInput).toBeEmpty();
    await blogspotPage.enterAddress(user.address);
    await expect(blogspotPage.addressInput).toHaveValue(user.address);
    await expect(blogspotPage.addressInput).not.toBeEmpty();
});

test('Select male gender', async ({ blogspotPage }) => {
    await blogspotPage.maleSelector.scrollIntoViewIfNeeded();
    await blogspotPage.maleSelector.check({ force: true });
    await expect(blogspotPage.maleSelector).toBeChecked();
    await expect(blogspotPage.femaleSelector).not.toBeChecked();
});

test('Select female gender', async ({ blogspotPage }) => {
    await blogspotPage.femaleSelector.scrollIntoViewIfNeeded();
    await blogspotPage.femaleSelector.check({ force: true });
    await expect(blogspotPage.femaleSelector).toBeChecked();
    await expect(blogspotPage.maleSelector).not.toBeChecked();
});

test('Select Sunday', async ({ blogspotPage }) => {
    await expect(blogspotPage.sundaySelector).not.toBeChecked();
    await blogspotPage.selectSunday();
    await expect(blogspotPage.sundaySelector).toBeChecked();
});

test('Select all weekdays', async ({ blogspotPage }) => {
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

test('Select Brazil in country dropdown list', async ({ blogspotPage }) => {
    await blogspotPage.openCountryDropdown();
    await blogspotPage.selectCountry(Country.brazil);
    // await expect(blogspotPage.countryDropdown).toHaveText("Brazil");
});

// 🔴 Тут не обираються опшини з дропдауна і тест падає
// test("Switch between countries in dropdown list", async ({ page, blogspotPage }) => {
//   // await expect(blogspotPage.countryDropdown).toHaveText('United States');
//   await blogspotPage.openCountryDropdown();
//   await blogspotPage.selectBrazilCountryDropdown();
//   await expect(blogspotPage.countryDropdown).toHaveText('Brazil');
//   await blogspotPage.selectCanadaCountryDropdown();
//   await expect(blogspotPage.countryDropdown).toHaveText('Canada');
// });

test('Select a blue color', async ({ blogspotPage }) => {
    await blogspotPage.colorListFocus();
    await blogspotPage.selectBlue();
    await expect(blogspotPage.blueColor).toHaveJSProperty('disabled', false);
    //  🔴 Як перевірити, що інший елемент не обран?
    // await expect(blogspotPage.greenColor).toHaveJSProperty("disabled", true);
});

test.only('Select a Giraffe animal', async ({ blogspotPage }) => {
    await blogspotPage.animalsListFocus();
    await blogspotPage.selectGiraffe();
    await expect(blogspotPage.giraffeAnimal).toHaveJSProperty('disabled', false);
});
