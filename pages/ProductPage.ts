import { Page } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';
import { Language, LanguageMap } from '../utils/LanguageMap';

export class ProductPage extends CommonActions {
  private lang: Language;

  constructor(page: Page, language: Language) {
    super(page);
    this.lang = language;
  }

  async goToFlyersMenu() {
    await this.clickByRoleName('link', LanguageMap[this.lang].flyersMenu);
  }

  async goToBookletsMenu() {
    await this.clickByRoleName('link', LanguageMap[this.lang].bookletsMenu);
  }

  async clickAdvertisingPrintMenu() {
    await this.clickByRoleName('link', LanguageMap[this.lang].advertisingPrintMenu);
  }
}
