import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { assert } from 'console';

const email = 'mytest.111888@gmail.com';
const password = 'TestPass123';

// В describe (test suit) - можу зберігати і beforeeach/aftereach і т.д
test.describe("Ordering", () => {
    test.beforeEach(async ({ page, signinPage }) => {
        await page.goto(`https://magento.softwaretestingboard.com/customer/account/login`);
        await signinPage.login(email, password);
    });
    
    test.only('Searching an item', async ({ page, signinPage, homePage, browser, request }) => {
        await homePage.searchByItems('hoodie');
        await homePage.searchInput.press('Enter');
        await homePage.openItem();
        const url = page.url();
        expect(url).toContain('selene-yoga-hoodie');
    });
    
    test.skip('Check that Size and Color are required fields', async ({ page, goodPage, browser, request }) => {
        await goodPage.addItemToCart();
        // assertThat(page.locator("//div[@for='super_attribute[143]']")).containsText('This is a required field.');
        // assertThat(page.locator("//div[@for='super_attribute[93]']")).containsText('This is a required field.');
        // GetByRole, Class, Css
    });    

});


