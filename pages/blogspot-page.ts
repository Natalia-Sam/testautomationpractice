import { type Page, type Locator } from "@playwright/test";

export default class BlogspotPage {
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

  public async enterName(name: string) {
    await this.nameInput.fill(name);
    // const enteredName = await this.nameInput.inputValue();
    // return enteredName;
  }

  public async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  public async enterPhone(phone: string) {
    await this.phoneInput.fill(phone);
  }

  public async enterAddress(address: string) {
    await this.addressInput.fill(address);
  }

  public async selectMaleGender() {
    await this.maleSelector.click();
  }

  public async selectFemaleGender() {
    await this.femaleSelector.click();
  }
}
