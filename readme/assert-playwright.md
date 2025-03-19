Assertions Playwright: #https://playwright.dev/docs/test-assertions

# import { expect } from '@playwright/test';

What is important?

-   `soft assert` code will continue to execude even if the verification failed till the moment when test finised and will show all errors from assert collected from all soft asserts

# example:

`await expect.soft(page.getByTestId('status')).toHaveText('Success');`

-   `assert` if assert failed test will stop execude immidiatly
    `await expect(page.getByTestId('status')).toHaveText('Success');`

-   `custom assert` if you want to set own log error description

`await expect(page.getByText('Name'), 'should be logged in').toBeVisible();`

-   `Auto-retrying assertions` - will retry until the assertion passes, or the assertion timeout is reached.
    `await expect(value).toBeFalsy()`

-   `Non-retrying assertions` - more flaky because code is async and sometimes can fail if element was not finished to load, do not retry on waiting the element

-   `Negative assert`
    `expect(value).not.toEqual(0);`
    `await expect(locator).not.toContainText('some text');`
