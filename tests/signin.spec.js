import { test } from '../fixtures';

const email = 'mytest.111888@gmail.com';
const password = 'TestPass123';

test.skip('Login', async ({ page, signinPage }) => {
    await page.goto(
        // "https://magento.softwaretestingboard.com/"
        'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'
    );
    await signinPage.login(email, password);
});
