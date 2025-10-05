import { Page } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';
import { Language, LanguageMap } from '../utils/LanguageMap';

export class FlyersPage extends CommonActions {
  private lang: Language;

  constructor(page: Page, language: Language) {
    super(page);
    this.lang = language;
  }

  async navigateToClassicFlyers() {
    await this.clickByRoleName('link', LanguageMap[this.lang].classicFlyers);
  }

  async navigateToEcoFlyers() {
    await this.clickByRoleName('link', LanguageMap[this.lang].ecoFlyers);
  }

  async navigateToHalfFoldLeaflets() {
    await this.clickByRoleName('link', LanguageMap[this.lang].halfFoldLeaflet);
  }

  async navigateToSpecialFinishingFlyers() {
    await this.clickByRoleName('link', LanguageMap[this.lang].specialFinishingFlyers);
  }
}