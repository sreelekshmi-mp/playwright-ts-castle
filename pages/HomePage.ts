import { Page } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';

export class HomePage extends CommonActions {
  constructor(page: Page) {
    super(page); 
  }

  // Navigate to base URL
  async goToBaseUrl() {
    await this.page.goto('/');
    await this.handleCookies();
  }

  // Handle cookie acceptance if present
  async handleCookies() {
    const cookieButton = this.page.locator('#cookie-accept');

    if (await cookieButton.isVisible()) {
      await cookieButton.click();
      console.log('Cookie accept button clicked');
    } else {
      console.log('No cookie banner present');
    }
  }
}
