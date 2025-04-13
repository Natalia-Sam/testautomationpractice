import { expect } from '@playwright/test';
import { test } from '../../saucedemo-fixture';
import InventoryPage from '../../saucedemo/pages/inventory-page';
import ShoppingCart from '../../saucedemo/pages/shopping-card-page';

let inventoryPage: InventoryPage;

test.describe('Product in cart', () => {
    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        await inventoryPage.navigate('https://www.saucedemo.com/inventory.html');
        await inventoryPage.waitForPageLoad();
        });

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

    
        const productCount = await inventoryPage.getProductCount();
        await inventoryPage.addToCartAllItems();

        const addedTocartItems = await inventoryPage.getShoppingCartBadgeItems();
        expect(addedTocartItems).toEqual(productCount);

        await inventoryPage.removeFromCartAllItems();
        await expect(inventoryPage.getShoppingCartBadge()).not.toBeVisible();
    });


    test.only('Adding item to card', async ({ page }) => {
        const expectedNumberOfItems = 1;
        await expect(inventoryPage.getShoppingCartBadge()).not.toBeVisible();
        await inventoryPage.addItemToCard();
        const addedTocartItems = await inventoryPage.getShoppingCartBadgeItems();
        expect(addedTocartItems).toEqual(1);
        const card = await inventoryPage.openCard();
        await card.waitForPageLoad();

        const numberOfItemsInCardBefore = await card.getAllItemsInCard();
        expect(numberOfItemsInCardBefore).toEqual(expectedNumberOfItems);

        await card.clickRemoveBtn();
        expect(page.locator('.cart_item')).not.toBeVisible();
        const numberOfItemsInCardAfter = await card.getAllItemsInCard();
        expect(numberOfItemsInCardAfter).toEqual(0);
    });

});
