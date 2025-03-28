import { type Page, type Locator } from "@playwright/test";
import { Country } from "../data/countries";

export default class BlogspotPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly addressInput: Locator;

  // Gender Locators
  readonly maleSelector: Locator;
  readonly femaleSelector: Locator;

  // Days of week locators
  readonly sundaySelector: Locator;
  readonly mondaySelector: Locator;
  readonly tuesdaySelector: Locator;
  readonly wednesdaySelector: Locator;
  readonly thursdaySelector: Locator;
  readonly fridaySelector: Locator;
  readonly saturdaySelector: Locator;

  // Country locators
  readonly countryDropdown: Locator;
  readonly usaOption: Locator;
  readonly canadaOption: Locator;
  readonly ukOption: Locator;
  readonly germanyOption: Locator;
  readonly franceOption: Locator;
  readonly australiaOption: Locator;
  readonly japanOption: Locator;
  readonly chinaOption: Locator;
  readonly brazilOption: Locator;
  readonly indiaOption: Locator;

  // Color locators
  readonly colorsList: Locator;
  readonly redColor: Locator;
  readonly blueColor: Locator;
  readonly greenColor: Locator;
  readonly yellowColor: Locator;
  readonly whiteColor: Locator;

  // Animal Locators
  readonly animalsSortedList: Locator;
  readonly catAnimal: Locator;
  readonly cheetahAnimal: Locator;
  readonly deerAnimal: Locator;
  readonly dogAnimal: Locator;
  readonly elephantAnimal: Locator;
  readonly foxAnimal: Locator;
  readonly giraffeAnimal: Locator;
  readonly lionAnimal: Locator;
  readonly rabbitAnimal: Locator;
  readonly zebraAnimal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = this.page.locator("//input[@id='name']");
    this.emailInput = this.page.locator("//input[@id='email']");
    this.phoneInput = this.page.locator("//input[@id='phone']");
    this.addressInput = this.page.locator("//textarea[@class='form-control']");

    // Gender Locators
    this.maleSelector = this.page.locator("//input[@id='male']");
    this.femaleSelector = this.page.locator("//input[@id='female']");

    // Days of week locators
    // this.sundayCheck = this.page.locator("//input[@id='sunday']");
    // this.sundayCheck = this.page.getByRole('input', { id: 'sunday' });
    this.sundaySelector = this.page.locator("#sunday");
    this.mondaySelector = this.page.locator("#monday");
    this.tuesdaySelector = this.page.locator("#tuesday");
    this.wednesdaySelector = this.page.locator("#wednesday");
    this.thursdaySelector = this.page.locator("#thursday");
    this.fridaySelector = this.page.locator("#friday");
    this.saturdaySelector = this.page.locator("#saturday");

    // Country locators
    this.countryDropdown = this.page.locator("#country");
    this.usaOption = this.page.locator("//option[@value='usa']");
    this.canadaOption = this.page.locator("//option[@value='canada']");
    this.ukOption = this.page.locator("//option[@value='uk']");
    this.germanyOption = this.page.locator("//option[@value='germany']");
    this.franceOption = this.page.locator("//option[@value='france']");
    this.australiaOption = this.page.locator("//option[@value='australia']");
    this.japanOption = this.page.locator("//option[@value='japan']");
    this.chinaOption = this.page.locator("//option[@value='china']");
    this.brazilOption = this.page.locator("//option[@value='brazil']");
    this.indiaOption = this.page.locator("//option[@value='india']");

    // Color locators
    this.colorsList = this.page.locator("//select[@id='colors']");
    this.redColor = this.page.locator("//option[@value='red']");
    this.blueColor = this.page.locator("//option[@value='blue']");
    this.greenColor = this.page.locator("//option[@value='green']");
    this.yellowColor = this.page.locator("//option[@value='yellow']");
    this.whiteColor = this.page.locator("//option[@value='white']");

    // Animal Locators
    this.animalsSortedList = this.page.locator("#animals");
    this.catAnimal = this.page.locator("//option[@value='cat']");
    this.cheetahAnimal = this.page.locator("//option[@value='cheetah']");
    this.deerAnimal = this.page.locator("//option[@value='deer']");
    this.dogAnimal = this.page.locator("//option[@value='dog']");
    this.elephantAnimal = this.page.locator("//option[@value='elephant']");
    this.foxAnimal = this.page.locator("//option[@value='fox']");
    this.giraffeAnimal = this.page.locator("//option[@value='giraffe']");
    this.lionAnimal = this.page.locator("//option[@value='lion']");
    this.rabbitAnimal = this.page.locator("//option[@value='rabbit']");
    this.zebraAnimal = this.page.locator("//option[@value='zebra']");
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

  public async selectSunday() {
    await this.sundaySelector.click();
  }

  public async selectMonday() {
    await this.mondaySelector.click();
  }

  public async selectTuesday() {
    await this.tuesdaySelector.click();
  }

  public async selectWednesday() {
    await this.wednesdaySelector.click();
  }

  public async selectThursday() {
    await this.thursdaySelector.click();
  }

  public async selectFriday() {
    await this.fridaySelector.click();
  }

  public async selectSaturday() {
    await this.saturdaySelector.click();
  }

  public async openCountryDropdown() {
    await this.countryDropdown.click();
  }

  public async selectCountry(country: string) {
    // this.page.locator("//option[@value='brazil']");
    // await this.page.selectOption("#country", "Brazil");
    // await this.page.selectOption("#country", `${country}`);
    await this.page.selectOption("#country", country);
    //await this.page.selectOption("#country", "Brazil");
    // await this.page.locator('#country').selectOption('Brazil');
    // await this.brazilOption.click();
  }

  public async selectCanadaCountryDropdown() {
    await this.canadaOption.click();
  }

  public async colorListFocus() {
    await this.colorsList.click();
  }

  public async selectBlue() {
    await this.blueColor.click();
  }

  public async selectGreen() {
    await this.greenColor.click();
  }

  public async animalsListFocus() {
    await this.animalsSortedList.click();
  }

  public async selectFox() {
    await this.foxAnimal.click();
  }

  public async selectGiraffe() {
    await this.giraffeAnimal.click();
  }
}
