import { type Page } from '@playwright/test';

export default class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('load');
    }
}
