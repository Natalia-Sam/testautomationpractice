import { test as base } from '@playwright/test';
import HomePage from './pages/magento/home-page';
import SalePage from './pages/magento/sale-page';
import SignInPage from './pages/magento/sigin-page';
import GoodPage from './pages/magento/good-page';
import MenPage from './pages/magento/men-page'

export const test = base.extend<{
    homePage: HomePage,
    signinPage: SignInPage,
    goodPage: GoodPage,
    salePage: SalePage, 
    menPage: MenPage,}>
    ({
    /** @type { HomePage } */
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    /** @type { SignInPage } */
    signinPage: async ({ page }, use) => {
        await use(new SignInPage(page));
    },

    /** @type { GoodPage } */
    goodPage: async ({ page }, use) => {
        await use(new GoodPage(page));
    },

    /** @type { SalePage } */
    salePage: async ({ page }, use) => {
        await use(new SalePage(page));
    },

     /** @type { MenPage } */
     menPage: async ({ page }, use) => {
        await use(new MenPage(page));
    },
});
