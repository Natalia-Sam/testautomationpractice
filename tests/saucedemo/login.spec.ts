import { expect } from '@playwright/test';
import { test } from '../../saucedemo-fixture';

test.describe('Login functionality', () => {
    test('Valid login with standard user', async ({ loginPage }) => {
        await loginPage.goto();
        const inventoryPage = await loginPage.login('standard_user', 'secret_sauce');
        const isLoggedIn = await inventoryPage.isLoggedIn();
        expect(isLoggedIn).toBeTruthy();
        await inventoryPage.verifyLoggedIn();
    });

    test('Invalid login', async ({ loginPage }) => {
        await loginPage.goto();

        await loginPage.enterUsername('invalid_user');
        await loginPage.enterPassword('invalid_password');
        await loginPage.clickLoginButton();

        const isErrorDisplayed = await loginPage.isErrorDisplayed();
        expect(isErrorDisplayed).toBeTruthy();
    });
});
