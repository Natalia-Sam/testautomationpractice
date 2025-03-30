import { type Page, type Locator } from "@playwright/test";
import { Months } from "../../data/months";

export default class DatePickerComp {
  readonly page: Page;
  readonly datePicker1: Locator;
  readonly previousMonthArrow: Locator;
  readonly nextMonthArrow: Locator;
  readonly date1: Locator;
  readonly month: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.datePicker1 = this.page.locator("//input[@id='datepicker']");
    this.datePicker1 = this.page.locator("#datepicker");
    // this.previousMonthArrow = this.page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']");
    // Пошук по класу:
    this.previousMonthArrow = this.page.locator('.ui-icon.ui-icon-circle-triangle-w');
    this.nextMonthArrow = this.page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']");
    this.month = this.page.locator(".ui-datepicker-month");
    this.date1 = this.page.getByRole('link', {name: '6'});
  }

  public async openDatepicker1() {
    await this.datePicker1.click();
  }

  public async selectNextMonth() {
    await this.nextMonthArrow.click();
  }

  public async selectPreviousMonth() {
    await this.previousMonthArrow.click();
  }

  public async selectDate(date: number) {
    // if (date < 1 || date > 31) {
    //   throw new Error("The date should be between 1 and 31");
    // }
    // await this.openDatepicker1();
    const dateLocator = this.page.locator(`//a[@data-date='${date}']`);
    // const dateLocator = this.page.getByRole('link', {name: `${date}`, exact: true});
    // await this.page.locator('[data-date]').filter({hasText: date.toString()}).click();
    await dateLocator.click();
  }

  public async setDate(date: Date) {
    // MM/Day/YYYY ('02/01/2025')
    // const [month, day, year] = date.split("/").map(Number);
    // const createDate = new Date(year, month - 1, day); // adjust month because starts from the 0;
    let currentMonth = await this.month.innerText();
    const utcMonth = date.getUTCMonth() + 1;
    // console.log("get month ", createDate.getUTCMonth() + 1);
    console.log("utc month ", utcMonth);
    const day = date.getDay();
      while(utcMonth !== Months[currentMonth]) {
          this.nextMonthArrow.click();
          currentMonth = await this.month.innerText();
      }
      await this.page.locator(`[data-date="${day}"]`).click();
    }
}
