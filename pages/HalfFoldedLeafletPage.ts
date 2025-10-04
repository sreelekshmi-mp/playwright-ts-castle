import { Page } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';

export class HalfFoldedLeafletPage extends CommonActions {
    constructor(page: Page) {
        super(page);
    }

    async clickLandscape() {
        await this.clickByRoleName('link', 'Landscape');
    }

    async clickMattAppearance() {
        await this.clickByRoleName('link', 'Matt Matt');
    }

    async clickDoubleSidedFinishing() {
        await this.clickByRoleName('link', 'Double-sided Matte lamination');
    }

    async clickAddToCart() {
        await this.clickByRoleName('button', 'Add to cart');
    }

}
