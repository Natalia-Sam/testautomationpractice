import { expect, type Page } from '@playwright/test';
import BasePage from './base-page';
import { step } from '../../saucedemo-fixture';
import ShoppingCart from './shopping-card-page';

export default class InventoryPage extends BasePage {
    private readonly path = 'inventory.html';

    private readonly productsList = '.inventory_list';
    private readonly appLogo = '.app_logo';
    private readonly hamburgerMenu = '#react-burger-menu-btn';
    private readonly shoppingCart = '.shopping_cart_link';
    private readonly productItems = '.inventory_item';
    private readonly pageTitle = '.title';
    private readonly addToCard = 'Add to cart';
    private readonly shoppingCartBadge = '.shopping_cart_badge';
    private readonly addToCardBtn = '#add-to-cart-sauce-labs-backpack';

    constructor(page: Page) {
        super(page);
    }

    @step('Login my user')
    async isLoggedIn(): Promise<boolean> {
        const currentUrl = this.page.url();
        const isCorrectUrl = currentUrl.includes(this.path);

        const isProductsListVisible = await this.page.isVisible(this.productsList);

        const titleElement = this.page.locator(this.pageTitle);
        const titleText = await titleElement.textContent();
        const hasCorrectTitle = titleText?.includes('Products') || false;

        return isCorrectUrl && isProductsListVisible && hasCorrectTitle;
    }

    @step()
    async verifyLoggedIn(): Promise<void> {
        await expect(this.page.locator(this.productsList)).toBeVisible();
        await expect(this.page.locator(this.pageTitle)).toContainText('Products');

        const currentUrl = this.page.url();
        expect(currentUrl).toContain(this.path);
    }

    @step()
    async getProductCount(): Promise<number> {
        return await this.page.locator(this.productItems).count();
    }

    @step()
    async openMenu(): Promise<void> {
        await this.page.click(this.hamburgerMenu);
    }

    @step()
    async clickShoppingCart(): Promise<void> {
        await this.page.click(this.shoppingCart);
    }

    @step()
    async addToCartAllItems() {
        const allProductItems = await this.page.locator(this.productItems).all();
        for (const item of allProductItems) {
            await item.getByRole('button', { name: 'Add to cart' }).click();
        }
    }

    @step()
    async removeFromCartAllItems() {
        const allProductItems = await this.page.locator(this.productItems).all();
        for (const item of allProductItems) {
            await item.getByRole('button', { name: 'Remove' }).click();
        }
    }

    @step()
    async getShoppingCartBadgeItems(): Promise<number> {
        const count = await this.page.locator(this.shoppingCartBadge).innerText();
        return Number(count);
    }

    getShoppingCartBadge() {
        return this.page.locator(this.shoppingCartBadge);
    }

    @step()
    async addItemToCard() {
        await this.page.click(this.addToCardBtn);
    }

    @step()
    async openCard() {
        await this.page.click(this.shoppingCart);
        return new ShoppingCart(this.page);
    }




}
