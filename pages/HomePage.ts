import { Page } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';
import { Language, LanguageMap } from '../utils/LanguageMap';

export class HomePage extends CommonActions {
  private lang: Language;

  constructor(page: Page, language: Language) {
    super(page);
    this.lang = language;
  }

  // Navigate to base URL and handle cookies
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

  // Select a country from the dropdown
  async selectCountryFromDropDown(countryName: string) {
    await this.clickCountryMenuDropdown();
    const countryLocator = this.page.getByRole('link', { name: countryName });
    
    if (!(await countryLocator.isVisible())) {
      throw new Error(`Country not visible in dropdown: ${countryName}`);
    }

    await countryLocator.click();
  }

  // Click the country menu dropdown
  async clickCountryMenuDropdown() {
    const button = this.page.locator('.header__language-bar').first();
    if (!(await button.isVisible())) {
      throw new Error('Country menu dropdown button not visible');
    }

    await button.click();
  }


  // Verify expected countries are available in the dropdown
  async verifyAvailableCountriesInDropDown(expectedCountries: string[]) {
    await this.clickCountryMenuDropdown();

    for (const country of expectedCountries) {
      const countryLocator = this.page.getByRole('link', { name: country });
      if (!(await countryLocator.isVisible())) {
        throw new Error(`Country not visible in dropdown: ${country}`);
      }
      console.log(`Verified country in dropdown: ${country}`);
    }
  }
}
