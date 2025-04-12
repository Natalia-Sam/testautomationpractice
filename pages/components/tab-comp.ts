import { type Page, type Locator } from '@playwright/test';

export default class TabComp {
    readonly page: Page;
    readonly wikipediaIcon: Locator;
    readonly wikipediaSearchInput: Locator;
    readonly wikipediaSearchButton: Locator;
    readonly wikipediaSearchResult: Locator;

    constructor(page: Page) {
        this.page = page;
        this.wikipediaIcon = this.page.locator(`.wikipedia-icon`);
        this.wikipediaSearchInput = this.page.locator(`.wikipedia-search-input`);
        this.wikipediaSearchButton = this.page.locator(`.wikipedia-search-button`);
        // this.wikipediaSearchButton = this.page.locator('input[type="submit"]');
        // this.wikipediaSearchButton = this.page.getByRole('button', {name: 'Submit'});
        this.wikipediaSearchResult = this.page.locator(`#wikipedia-search-result-link`);
    }

    public async openWikipediaTab() {
        await this.wikipediaIcon.click();
    }

    public async searchWikipediaInput(value: string) {
        await this.wikipediaSearchInput.fill(value);
    }

    public async pressWikipediaSearchButton() {
        await this.wikipediaSearchButton.click();
    }
}
