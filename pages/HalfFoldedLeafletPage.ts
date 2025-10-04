import { Page } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';

export class HalfFoldedLeafletPage extends CommonActions {
    constructor(page: Page) {
        super(page); // passes page to CommonActions
    }

    async clickLandscape() {
        await this.clickByRoleName('link', 'Landscape');
    }

    async clickMattMatt() {
        await this.clickByRoleName('link', 'Matt Matt');
    }

    async clickAddToCart() {
        await this.clickByRoleName('button', 'Add to cart');
    }
}
