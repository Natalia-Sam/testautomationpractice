import { type Page } from '@playwright/test';
import BasePage from './base-page';
import { step } from '../../saucedemo-fixture';

export default class ShoppingCart extends BasePage {
    private readonly removeItemFromCardBtn = '#remove-sauce-labs-backpack';
    private readonly itemInCard = '.cart_item';

    constructor(page: Page) {
            super(page);
        }

        @step()
        async clickRemoveBtn() {
            await this.page.click(this.removeItemFromCardBtn);
        }

        @step()
        async getAllItemsInCard() {
            const allItems = await this.page.locator(this.itemInCard).all();
            return allItems.length;
        }
}