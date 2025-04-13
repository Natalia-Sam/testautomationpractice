import { type Page } from '@playwright/test';
import BasePage from './base-page';
import InventoryPage from './inventory-page';
import { step } from '../../saucedemo-fixture';

export default class LoginPage extends BasePage {
    private readonly url = 'https://www.saucedemo.com/';

    private readonly usernameInput = '#user-name';
    private readonly passwordInput = '#password';
    private readonly loginButton = '#login-button';
    private readonly errorMessage = '[data-test="error"]';

    constructor(page: Page) {
        super(page);
    }

    @step()
    async goto(): Promise<void> {
        await this.navigate(this.url);
        await this.waitForPageLoad();
    }

    @step()
    async enterUsername(username: string): Promise<void> {
        await this.page.fill(this.usernameInput, username);
    }

    @step()
    async enterPassword(password: string): Promise<void> {
        await this.page.fill(this.passwordInput, password);
    }

    @step()
    async clickLoginButton(): Promise<void> {
        await this.page.click(this.loginButton);
    }

    @step()
    async login(username: string, password: string): Promise<InventoryPage> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
        return new InventoryPage(this.page);
    }

    @step()
    async getErrorMessage(): Promise<string> {
        const errorElement = this.page.locator(this.errorMessage);
        await errorElement.waitFor({ state: 'visible' });
        return errorElement.textContent() as Promise<string>;
    }

    @step()
    async isErrorDisplayed(): Promise<boolean> {
        return await this.page.isVisible(this.errorMessage);
    }
}
