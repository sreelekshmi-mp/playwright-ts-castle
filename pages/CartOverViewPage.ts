import { Page, expect } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';
import { HalfFoldedLeafletPage } from './HalfFoldedLeafletPage';


export class CartOverViewPage extends CommonActions {
    constructor(page: Page) {
        super(page);
    }


async verifyProductDetails(childTexts: string[]) {
    const parent = this.page.locator('#cart-layout'); 
    for (const text of childTexts) {
        const childLocator = parent.locator(`:text-is("${text}")`);
        await expect(childLocator).toBeVisible();
    }
}

async verifyCartOverview(texts: string[]) {
    const parent = this.page.locator('#cart-summary'); 
    for (const text of texts) {
        const childLocator = parent.locator(`:text-is("${text}")`);
        await expect(childLocator).toBeVisible();
    }
}


}
