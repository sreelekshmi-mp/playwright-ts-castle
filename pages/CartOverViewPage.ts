import { Page, expect } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';


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
        await expect(childLocator).toBeVisible();;
    }
}


async deleteCartItemByHeading(heading: string, quality?: string) {
  const cartItems = this.page.locator('.new-cart-item');
  const count = await cartItems.count();

  for (let i = 0; i < count; i++) {
    const item = cartItems.nth(i);

    // Get heading text inside title
    const itemHeading = await item.locator('.new-cart-item__title .new-cart-item__heading').innerText();
    if (itemHeading.trim() !== heading) continue;

    // If quality is provided, check content text
    if (quality) {
      const itemContent = await item.locator('.new-cart-item__content').innerText();
      if (!itemContent.includes(quality)) continue;
    }

    // Found matching item and click delete
    await item.locator('.new-cart-item__actions > button:nth-child(3)').click();
    return;

  }

  throw new Error(`Cart item with heading "${heading}"${quality ? ` and quality "
    ${quality}"` : ''} not found`);
}

}
