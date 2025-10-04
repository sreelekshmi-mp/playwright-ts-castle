import { Page } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';

export class CartOverViewPage extends CommonActions {
    constructor(page: Page) {
        super(page);
    }

    async verifyQuantity(quantity: string) {
        await this.verifyTextByString(quantity);
    }

    async verifyProductType(type: string) {
        await this.verifyTextByString(type);
    }

    async verifyOrientation(orientation: string) {
        await this.verifyTextByString(orientation);
    }

    async verifyPaperType(paper: string) {
        await this.verifyTextByString(paper);
    }

    async verifyFinishing(finishing: string) {
        await this.verifyTextByString(finishing);
    }

    async verifyDeliveryTime(time: string) {
        await this.verifyTextByString(time);
    }

    async verifyHeading(heading: string) {
        await this.verifyTextByString(heading);
    }

    async verifyTotal(total: string) {
        await this.verifyTextByString(total);
    }
}
