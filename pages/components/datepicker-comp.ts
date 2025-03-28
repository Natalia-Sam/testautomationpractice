import { type Page, type Locator } from "@playwright/test";

export default class DatePickerComp {
  readonly page: Page;
  readonly datePicker1: Locator;
  readonly previousMonthArrow: Locator;
  readonly nextMonthArrow: Locator;

  // Dates of the month
  readonly date1: Locator;
  readonly date2: Locator;
  readonly date3: Locator;
  readonly date4: Locator;
  readonly date5: Locator;
  readonly date6: Locator;
  readonly date7: Locator;
  readonly date8: Locator;
  readonly date9: Locator;
  readonly date10: Locator;
  readonly date11: Locator;
  readonly date12: Locator;
  readonly date13: Locator;
  readonly date14: Locator;
  readonly date15: Locator;
  readonly date16: Locator;
  readonly date17: Locator;
  readonly date18: Locator;
  readonly date19: Locator;
  readonly date20: Locator;
  readonly date21: Locator;
  readonly date22: Locator;
  readonly date23: Locator;
  readonly date24: Locator;
  readonly date25: Locator;
  readonly date26: Locator;
  readonly date27: Locator;
  readonly date28: Locator;
  readonly date29: Locator;
  readonly date30: Locator;
  readonly date31: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.datePicker1 = this.page.locator("//input[@id='datepicker']");
    this.datePicker1 = this.page.locator("#datepicker");
    this.previousMonthArrow = this.page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']");
    this.nextMonthArrow = this.page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']");

    // Dates of the month
    this.date1 = this.page.locator("//a[@data-date='1']");
    this.date2 = this.page.locator("//a[@data-date='2']");
    this.date3 = this.page.locator("//a[@data-date='3']");
    this.date4 = this.page.locator("//a[@data-date='4']");
    this.date5 = this.page.locator("//a[@data-date='5']");
    this.date6 = this.page.locator("//a[@data-date='6']");
    this.date7 = this.page.locator("//a[@data-date='7']");
    this.date8 = this.page.locator("//a[@data-date='8']");
    this.date9 = this.page.locator("//a[@data-date='9']");
    this.date10 = this.page.locator("//a[@data-date='10']");
    this.date11 = this.page.locator("//a[@data-date='11']");
    this.date12 = this.page.locator("//a[@data-date='12']");
    this.date13 = this.page.locator("//a[@data-date='13']");
    this.date14 = this.page.locator("//a[@data-date='14']");
    this.date15 = this.page.locator("//a[@data-date='15']");
    this.date16 = this.page.locator("//a[@data-date='16']");
    this.date17 = this.page.locator("//a[@data-date='17']");
    this.date18 = this.page.locator("//a[@data-date='18']");
    this.date19 = this.page.locator("//a[@data-date='19']");
    this.date20 = this.page.locator("//a[@data-date='20']");
    this.date21 = this.page.locator("//a[@data-date='21']");
    this.date22 = this.page.locator("//a[@data-date='22']");
    this.date23 = this.page.locator("//a[@data-date='23']");
    this.date24 = this.page.locator("//a[@data-date='24']");
    this.date25 = this.page.locator("//a[@data-date='25']");
    this.date26 = this.page.locator("//a[@data-date='26']");
    this.date27 = this.page.locator("//a[@data-date='27']");
    this.date28 = this.page.locator("//a[@data-date='28']");
    this.date29 = this.page.locator("//a[@data-date='29']");
    this.date30 = this.page.locator("//a[@data-date='30']");
    this.date31 = this.page.locator("//a[@data-date='31']");
  }

  public async openDatepicker1() {
    await this.datePicker1.click();
  }

  public async selectNextmonth() {
    await this.nextMonthArrow.click();
  }

  public async selectPreviousmonth() {
    await this.previousMonthArrow.click();
  }

  public async selectDate(date: number) {
    if (date < 1 || date > 31) {
      throw new Error("The date should be between 1 and 31");
    }
  
    // await this.openDatepicker1();
    const dateLocator = this.page.locator(`//a[@data-date='${date}']`);
    await dateLocator.click();
  }
}
