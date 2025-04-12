import { expect } from '@playwright/test';
import { test } from '../fixtures';

const value = 'cat';

test.describe('Open main page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`https://testautomationpractice.blogspot.com/`);
    });

    test('Open Wikipedia tab', async ({ page, tabComp, context }) => {
        await tabComp.openWikipediaTab();
        page = await context.waitForEvent(`page`);
        await page.bringToFront();
        const pageUrl = page.url();
        expect(pageUrl).toEqual(`https://en.wikipedia.org/wiki/Main_Page`);

        await expect(page.getByRole('heading', { name: 'Welcome to Wikipedia' })).toContainText('Welcome to');
    });

    test.only('Search using Wikipedia input', async ({ page, tabComp, context }) => {
        test.setTimeout(45000);
        await tabComp.searchWikipediaInput(value);
        await page.locator('.wikipedia-search-button').click();
        await page.locator('.wikipedia-search-results-header').waitFor({ timeout: 1000 });
        const searchresults = await page.locator('#wikipedia-search-result-link a').all();

        console.log('serchResalts.length', searchresults);
        await searchresults[0].click();
        const newPage = await context.waitForEvent(`page`);
        await newPage.bringToFront();
        const pageUrl = newPage.url();
        expect(pageUrl).toContain(`wikipedia.org/wiki`);
        const pageTitle = newPage.locator('header .mw-page-title-main');
        await expect(pageTitle).toContainText(value, { ignoreCase: true });
    });

    // test.afterEach(async ({ context }) => {
    //   context.close();
    // });

    // test.afterEach(async ({ context }) => {
    //   const pages = context.pages();
    //   for (const page of pages) {
    //     if (
    //       !page.url().includes("https://testautomationpractice.blogspot.com/")
    //     ) {
    //       await page.close();
    //     }
    //   }
    // });

    // npx playwright test tests/tab-tests.spec.ts --ui
});
