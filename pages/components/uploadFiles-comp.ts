import { type Page, type Locator } from "@playwright/test";

export default class UploadFilesComp {
  readonly page: Page;
  readonly chooseFile: Locator;
  readonly chooseFiles: Locator;
  readonly uploadFile: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chooseFile = this.page.locator('#singleFileInput');
    this.chooseFiles = this.page.getByRole('button', {name: 'Choose Files'});
    this.uploadFile = this.page.getByRole('button', {name: 'Upload Single File'});
  }

  public async chooseSingleFile(pathToFile: string) {
    await this.chooseFile.setInputFiles(pathToFile);
  };

  public async clickUploadFile() {
    await this.uploadFile.click();
  }
}