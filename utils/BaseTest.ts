import { test as baseTest } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { HomePage } from '../pages/HomePage';
import { FlyersPage } from '../pages/FlyersPage';
import { HalfFoldedLeafletPage } from '../pages/HalfFoldedLeafletPage';
import { CartOverViewPage } from '../pages/CartOverViewPage';
import { Language, LanguageMap } from './LanguageMap';

interface PageObjects {
    homePage: HomePage;
    productPage: ProductPage;
    flyersPage: FlyersPage;
    leafletPage: HalfFoldedLeafletPage;
    cartPage: CartOverViewPage;
    language: Language;
}


const test = baseTest.extend<PageObjects>({
  // Default language fixture
  language: async ({}, use) => {
    await use('en');
  },

  // Page object fixtures
  homePage: async ({ page, language }, use) => {
    await use(new HomePage(page, language));
  },
  productPage: async ({ page, language }, use) => {
    await use(new ProductPage(page, language));
  },
  flyersPage: async ({ page, language }, use) => {
    await use(new FlyersPage(page, language));
  },
  leafletPage: async ({ page, language }, use) => {
    await use(new HalfFoldedLeafletPage(page, language));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartOverViewPage(page));
  },
});


// Logs and setup before each test
test.beforeEach(async ({ homePage }, testInfo) => {
  console.log(`\nStarting test: ${testInfo.title}`);

  // Navigate to base URL before each test
  await homePage.goToBaseUrl();
});


// Logs after each test, with error details if failed
test.afterEach(async ({}, testInfo) => {
  console.log(`Test finished: ${testInfo.title} - Status: ${testInfo.status}`);
  if (testInfo.error) {
    console.error(`Error details: ${testInfo.error}`);
  }
});

export default test;
export const expect = baseTest.expect;
