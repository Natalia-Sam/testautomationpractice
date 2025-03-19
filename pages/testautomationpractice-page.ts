import { type Page, type Locator } from '@playwright/test';

export default class TestAutomationPracticePage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly addressInput: Locator;
    readonly maleSelector: Locator;
    readonly femaleSelector: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.nameInput = this.page.locator("//input[@id='name']");
        this.emailInput = this.page.locator("//input[@id='email']");
        this.phoneInput = this.page.locator("//input[@id='phone']");
        this.addressInput = this.page.locator("//textarea[@class='form-control']");
        this.maleSelector = this.page.locator("//input[@id='male']");
        this.femaleSelector = this.page.locator("//input[@id='female']");
        
    }

    public async addItemToCart() {
    
    }
}
