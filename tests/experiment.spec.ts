import { test } from '../fixtures';
import { Country } from '../data/countries';

const name = 'Natalia';
const email = 'mytest.111888@gmail.com';
// const phone = '0123456789';
// const address = '7101 Georgia Avenue Northwest, Washington, DC, USA';

test.describe('Open main page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`https://testautomationpractice.blogspot.com/`);
    });

    test.afterEach(async ({ page }) => {
        //clean data
        await page.getByRole('textbox').clear();
    });
});

test('Validate entered name', async ({ page }) => {
    test.setTimeout(45000);
    // test.slow();
    console.log(page.getByRole('textbox', { name: 'Enter Name' }));
    await page.getByRole('textbox', { name: 'Enter Name' }).fill(name);
    await page.getByPlaceholder('Enter EMail', { exact: true }).fill(email);
});

test('checkbox', async ({ blogspotPage }) => {
    await blogspotPage.maleSelector.scrollIntoViewIfNeeded();
    await blogspotPage.maleSelector.check({ force: true });
});

test('Select Brazil in country dropdown list', async ({ blogspotPage }) => {
    await blogspotPage.openCountryDropdown();
    await blogspotPage.selectCountry(Country.brazil);
    // await expect(blogspotPage.countryDropdown).toHaveText("Brazil");
});
