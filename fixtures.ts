import { test as base } from "@playwright/test";
import BlogspotPage from "./pages/blogspot-page";
import DatePickerComp from "./pages/components/datepicker-comp"

export const test = base.extend<{
  blogspotPage: BlogspotPage;
  datePickerComp: DatePickerComp
}>({
  /** @type { BlogspotPage } */
  blogspotPage: async ({ page }, use) => {
    await use(new BlogspotPage(page));
  },

   /** @type { DatePickerComp } */
   datePickerComp: async ({ page }, use) => {
    await use(new DatePickerComp(page));
  },
});
