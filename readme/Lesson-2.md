### After Review

1. Use faker for organazing your user data.
2. Use test.before()
3. Use test.after()

test.beforeEach(async ({ page }) => {
await page.goto(`https://testautomationpractice.blogspot.com/`);
});

test.afterEach(async ({ page }) => {
//clean data
await page.getByRole('textbox').clear();
});

4. Each test should be in different file
5. Where is soft expect()?
6. Check are you sure need await await expect(name.length).toBeLessThanOrEqual(10);?
7. Do not forget you call methods, so need to add round brackets
   `await expect(blogspotPage.maleSelector).toBeChecked;`
   `await expect(blogspotPage.femaleSelector).not.toBeChecked;`
8. Please start to use:
   [css cheetshit](https://devhints.io/css)
   [xpath cheetshit](https://devhints.io/xpath)

### Locators playwright:

`page.getByRole()` to locate by explicit and implicit accessibility attributes.
`page.getByText()` to locate by text content.
`page.getByLabel()` to locate a form control by associated label's text.
`page.getByPlaceholder()` to locate an input by placeholder.
`page.getByAltText()` to locate an element, usually image, by its text alternative.
`page.getByTitle()` to locate an element by its title attribute.
`page.getByTestId()` to locate an element based on its data-testid attribute (other attributes can be configured).

9. Accessability tab in Chrome (Computed properties)
   Some accessibility properties are dynamically calculated by the browser. These properties can be viewed in the Computed Properties section of the Accessibility tab.
   [accessibility - Computed Properties](https://developer.chrome.com/docs/devtools/accessibility/reference#tab)

`console.log('inputValue ', await blogspotPage.nameInput.inputValue());` - value created in Compute Properties so test passed

- test #1 NameInput
  `await expect.soft(name.length).toBeLessThanOrEqual(10);` - this relates only to you, becuase in dome I see it checks 15 (we can change it to verify that after setting long name morethen 15 our input field cut the name to 15 chars)
  `await expect.soft(name).toMatch(/^[A-Z][A-Za-z\s'-]*$/);` - this you check yourself
  `await expect.soft(blogspotPage.nameInput).toHaveValue(/^[A-Z][A-Za-z\s'-]{1,10}$/);` - you check yourself

- test #2 Validate entered email
  `await expect(blogspotPage.emailInput).toHaveValue(email);` - this will work again Compute Properties
  `await expect(blogspotPage.emailInput).toHaveText('mytest.111888@gmail.com');` - will not work becuase does not have text in dom
  `const innerText = await blogspotPage.emailInput.innerText();`
  `expect(innerText).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);` a proper way if we expect text from tags

- test #3 Validate entered phone
  `await expect(blogspotPage.phoneInput).toHaveValue(phone);`
  `await expect(blogspotPage.phoneInput).not.toBeEmpty();` - also relay on value

- test #4 Validate entered address - looks fine
- test #5, #6 Select gender
  `await expect(blogspotPage.maleSelector).toBeChecked;` - should be called function ()
  `await expect(blogspotPage.femaleSelector).not.toBeChecked;`
  `await this.maleSelector.click();` vs `await this.maleSelector.check({force: true});`
  [check](https://playwright.dev/docs/api/class-locator#locator-check)
  [set-check](https://playwright.dev/docs/api/class-locator#locator-set-checked)

- test #7 Select Sunday
  `await expect(blogspotPage.sundaySelector).not.toBeChecked();`
  `await blogspotPage.selectSunday();`
  `await expect(blogspotPage.sundaySelector).toBeChecked();`

  -test #8 Verify country dropdown
  `await page.locator('#country').click();`
  `await page.selectOption('#country', Country.uk);`
  `await expect(page.getByRole('combobox', {name:'Country:'})).toHaveValue(Country.uk);`

  // await page.selectOption('[value="australia"]', Country.australia); - this found two elements
  [selectOption](https://playwright.dev/docs/api/class-locator#locator-select-option)
