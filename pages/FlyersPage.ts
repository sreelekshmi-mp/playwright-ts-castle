import { Page } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';

export class FlyersPage extends CommonActions {
    constructor(page: Page) {
        super(page); 
    }

    async navigateToClassicFlyers() {
        await this.clickByRoleName('link', /^Classic Flyers/);
    }

    async navigateToEcoFlyers() {
        await this.clickByRoleName('link', /^Eco Flyers/);
    }

    async navigateToHalfFoldLeaflets() {
        await this.clickByRoleName('link', /^Half-Folded Leaflet/);
    }

    async navigateToSpecialFinishingFlyers() {
        await this.clickByRoleName('link', /^Special Finishing Flyers/);
    }
}
