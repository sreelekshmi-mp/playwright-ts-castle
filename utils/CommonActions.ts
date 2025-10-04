import { Page, Locator, expect } from '@playwright/test';

export class CommonActions {
    constructor(public page: Page) {}

    async clickByRoleName(role: string, name: string | RegExp) {
        await this.page.getByRole(role as any, { name }).click();
    }

    async typeText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async verifyText(locator: Locator, expectedText: string) {
        await expect(locator).toHaveText(expectedText);
    }

    async isVisible(locator: Locator) {
        return await locator.isVisible();
    }

    async verifyTextByString(text: string) {
    await expect(this.page.getByText(text, { exact: true })).toBeVisible();
}

async searchAndSelect(searchText: string, dropdownText: string) {
    // Focus and fill the search box
    await this.page.getByRole('textbox', { name: 'Find a product...' }).click();
    await this.page.getByRole('textbox', { name: 'Find a product...' }).fill(searchText);

    // Click the dropdown item by exact text
    await this.page.getByText(dropdownText, { exact: true }).first().click();
}

}
