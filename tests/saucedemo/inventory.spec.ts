import { expect } from '@playwright/test';
import { test } from '../../saucedemo-fixture';
import InventoryPage from '../../saucedemo/pages/inventory-page';

test.describe('Product in cart', () => {
    test('Valid login with standard user', async ({ page }) => {
        // const inventoryPage = await test.step('Set login and password', async () => {
        //     await loginPage.goto();
        //     const inventoryPage = await loginPage.login('standard_user', 'secret_sauce');
        //     return inventoryPage;
        // });

        // test.step('Verify login was sucessful', async () => {
        //     const isLoggedIn = await inventoryPage.isLoggedIn();
        //     expect(isLoggedIn).toBeTruthy();
        //     await inventoryPage.verifyLoggedIn();
        // });

        const inventoryPage = new InventoryPage(page);
        await inventoryPage.navigate('https://www.saucedemo.com/inventory.html');
        await inventoryPage.waitForPageLoad();

        const productCount = await inventoryPage.getProductCount();
        await inventoryPage.addToCartAllItems();

        const addedTocartItems = await inventoryPage.getShoppingCartBadgeItems();
        expect(addedTocartItems).toEqual(productCount);

        await inventoryPage.removeFromCartAllItems();
        await expect(inventoryPage.getShoppingCartBadge()).not.toBeVisible();
    });
});
