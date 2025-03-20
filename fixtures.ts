import { test as base } from "@playwright/test";
import BlogspotPage from "./pages/blogspot-page";

export const test = base.extend<{
  blogspotPage: BlogspotPage;
}>({
  /** @type { BlogspotPage } */
  blogspotPage: async ({ page }, use) => {
    await use(new BlogspotPage(page));
  },
});
