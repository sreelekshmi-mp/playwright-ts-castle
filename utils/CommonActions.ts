import { Page, Locator, expect } from '@playwright/test';

export class CommonActions {
    constructor(public page: Page) {}

    async clickByRoleName(role: string, name: string | RegExp) {
        await this.page.getByRole(role as any, { name }).click();
    }

    async typeText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async isVisible(locator: Locator) {
        return await locator.isVisible();
    }

    async verifyHeadingByText(text: string) {
        await expect(
            this.page.getByRole('heading', { name: new RegExp(`^\\s*${text}\\s*$`) }))
                    .toBeVisible({ timeout: 7000});
    }


    async verifyTextByString(text: string) {
        await expect(this.page.getByText(text, { exact: true }))
                    .toBeVisible({ timeout: 7000});
    }

    async verifyTextNotPresent(text: string) {
        await expect(this.page.getByText(text, { exact: true })).not
                .toBeVisible({ timeout: 7000});
    }

    async clickWithWait(role: string, name: string) {
        const locator = this.page.getByRole(role as any, { name });
        await locator.waitFor({ state: 'visible', timeout: 7000 });
        await expect(locator).toBeEnabled({ timeout: 7000 });
        await locator.click();

    }

}

