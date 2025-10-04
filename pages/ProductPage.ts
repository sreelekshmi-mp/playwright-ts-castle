import { Page, expect } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';

export class ProductPage extends CommonActions{
  constructor(page: Page) {
    super(page); 
  }


  async goToFlyersMenu() {
    await this.page.getByRole('link', { name: 'Flyers & Leaflets' }).click();
  }


}
