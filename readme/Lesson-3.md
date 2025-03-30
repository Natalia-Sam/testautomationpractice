
# Review Calendar:
1. should be dynamic page that accept one date and form locator
2. no need to do copy paste on this  `this.date1 = this.page.locator("//a[@data-date='1']");` 
3.   `test.afterEach` - you have use just locator that was initialized in the page object, so you have to get the DatePickerComp inside  {page, datePickerComp} :
        `test.afterEach(async ({ page }) => {`
            `await page.locator('#datepicker').clear();`
        `});`

4.  `const dateLocator = this.page.locator(`//a[@data-date='${date}']`);`

    # There are few ways to get the proper locator:
    //V1
    `await this.page.getByRole('link', {name: date.toString()}).click();`
    //V2
    `await this.page.locator('[data-date]').filter({hasText: date.toString()}).click();`

5. Use new Date()

# Example how we can improve it:

  `public async setDate(date: string) {`
  // MM/Day/YYYY
  `const [month, day, year] = date.split("/").map(Number);`
  `const createDate = new Date(year, month - 1 , day); // adjust month because starts from the 0;`
  `let currentMonth = await this.month.innerText();`
    `while(createDate.getMonth() !== Months[currentMonth]) {`
        `this.nextMonthArrow.click();`
        `currentMonth = await this.month.innerText();`
    `}`
    `await this.page.locator(`[data-date="${day}"]`).click();`
  `}`

6. New Matirial
  # Add video to the log -  video: 'on',
  # Upload file 
  # Work with new tabs

 