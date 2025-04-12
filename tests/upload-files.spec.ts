import { expect } from '@playwright/test';
import { test } from '../fixtures';
import path from 'path';

test.describe('Open main page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`https://testautomationpractice.blogspot.com/`);
    });

    test('Select a file', async ({ uploadFilesComp }) => {
        const filePath = path.join(__dirname, `resources/file.pdf`);
        await uploadFilesComp.chooseSingleFile(filePath);
        await uploadFilesComp.clickUpload1File();
        // 🔴 Спочатку спрацьовувала перевірка через Array, а потім почала видавати помилку
        // await expect(uploadFilesComp.confirmFile1Uploaded).toContainText(['Single file selected', 'file.pdf']);
        await expect(uploadFilesComp.confirmFile1Uploaded).toContainText('Single file selected');
        await expect(uploadFilesComp.confirmFile1Uploaded).toContainText('file.pdf');
    });

    test('Select multiple files', async ({ uploadFilesComp }) => {
        const filePath1 = path.join(__dirname, `resources/file.pdf`);
        const filePath2 = path.join(__dirname, `resources/file.txt`);
        const filePath3 = path.join(__dirname, `resources/art_10.jpeg`);
        await uploadFilesComp.chooseMultipleFiles([filePath1, filePath2, filePath3]);
        await uploadFilesComp.clickUploadMultipleFiles();
        // await expect(uploadFilesComp.confirmFilesUploaded).toContainText(['Multiple files selected', 'file.pdf', 'file.txt', 'art_10.jpeg']);
        // await expect(page.locator('p > br')).toContainText(['Multiple files selected', 'file.pdf', 'file.txt', 'art_10.jpeg']);
        await expect(uploadFilesComp.confirmFilesUploaded).toContainText('Multiple files selected');
        await expect(uploadFilesComp.confirmFilesUploaded).toContainText('file.pdf');
        await expect(uploadFilesComp.confirmFilesUploaded).toContainText('file.txt');
        await expect(uploadFilesComp.confirmFilesUploaded).toContainText('art_10.jpeg');
    });

    // npx playwright test tests/upload-files.spec.ts --ui
});
