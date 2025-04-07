import { type Page, type Locator } from "@playwright/test";

export default class UploadFilesComp {
  readonly page: Page;
  readonly chooseFile: Locator;
  readonly chooseFiles: Locator;
  readonly uploadSingleFile: Locator;
  readonly uploadMultipleFiles: Locator;
  readonly confirmFile1Uploaded: Locator;
  readonly confirmFilesUploaded: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chooseFile = this.page.locator("#singleFileInput");
    this.uploadSingleFile = this.page.getByRole("button", {
      name: "Upload Single File",
    });
    this.confirmFile1Uploaded = this.page.locator("#singleFileStatus");

    // 🔴 Чомусь не знаходило цей локатор по ролі
    // this.chooseFiles = this.page.getByRole('button', {name: 'Choose Files'});
    this.chooseFiles = this.page.locator("#multipleFilesInput");
    this.uploadMultipleFiles = this.page.getByRole("button", {
      name: "Upload Multiple Files",
    });
    this.confirmFilesUploaded = this.page.locator("#multipleFilesStatus");
  }

  public async chooseSingleFile(pathToFile: string) {
    await this.chooseFile.setInputFiles(pathToFile);
  }

  public async clickUpload1File() {
    await this.uploadSingleFile.click();
  }

  public async chooseMultipleFiles(pathsToFiles: string[]) {
    await this.chooseFiles.setInputFiles(pathsToFiles);
  }

  public async clickUploadMultipleFiles() {
    await this.uploadMultipleFiles.click();
  }
}
