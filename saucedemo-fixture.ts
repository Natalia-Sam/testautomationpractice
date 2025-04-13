import { test as base } from '@playwright/test';
import BasePage from './saucedemo/pages/base-page';
import LoginPage from './saucedemo/pages/login-page';

export type Custom = {
    basePage: BasePage;
    loginPage: LoginPage;
};

export const test = base.extend<Custom>({
    /** @type { BasePage } */
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },

    /** @type { LoginPage } */
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
});

/**
 * Decorator function for wrapping POM methods in a test.step.
 * Use it without a step name `@step()`.
 * Or with a step name `@step("Search something")`.
 * @param stepName - The name of the test step.
 * @returns A decorator function that can be used to decorate test methods.
 */
export function step(stepName?: string) {
    return function decorator(target: Function, context: ClassMethodDecoratorContext) {
        return function replacementMethod(...args: unknown[]) {
            const name = `${stepName || (context.name as string)}`;
            return test.step(name, async () => {
                return await target.call(this, ...args);
            });
        };
    };
}
