import { test as setup, expect } from '@playwright/test';
import path from 'path';
import LoginPage from '../saucedemo/pages/login-page';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
    // await page.goto('https://www.saucedemo.com/');
    // await page.fill('#user-name', 'standard_user');
    // await page.fill('#password', 'secret_sauce');
    // await page.click('#login-button');

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const inventoryPage = await loginPage.login('standard_user', 'secret_sauce');
    const isLoggedIn = await inventoryPage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
    
    await page.context().storageState({ path: authFile });
});
