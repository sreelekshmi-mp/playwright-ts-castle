import { Page } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';
import { Language, LanguageMap } from '../utils/LanguageMap';

export class HalfFoldedLeafletPage extends CommonActions {
  private lang: Language;

  constructor(page: Page, language: Language) {
    super(page);
    this.lang = language;
  }

  async clickLandscape() {
    await this.clickWithWait('link', LanguageMap[this.lang].landscape);
  }

  async clickMattAppearance() {
    await this.clickWithWait('link', LanguageMap[this.lang].mattAppearance);
  }

  async clickDoubleSidedFinishing() {
    await this.clickWithWait('link', LanguageMap[this.lang].doubleSidedFinishing);
  }

  async clickAddToCart() {
    await this.clickWithWait('button', LanguageMap[this.lang].addToCart);
  }
}
