import { test as baseTest } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { HomePage } from '../pages/HomePage';
import { FlyersPage } from '../pages/FlyersPage';
import { HalfFoldedLeafletPage } from '../pages/HalfFoldedLeafletPage';
import { CartOverViewPage } from '../pages/CartOverViewPage';

// Interface for fixtures
interface PageObjects {
    homePage: HomePage;
    productPage: ProductPage;
    flyersPage: FlyersPage;
    leafletPage: HalfFoldedLeafletPage;
    cartPage: CartOverViewPage;
}

const test = baseTest.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  flyersPage: async ({ page }, use) => {
    await use(new FlyersPage(page));
  },
  leafletPage: async ({ page }, use) => {
    await use(new HalfFoldedLeafletPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartOverViewPage(page));
  },
});


test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Starting test: ${testInfo.title}`);
});


test.afterEach(async ({}, testInfo) => {
  console.log(`Test finished: ${testInfo.title} - Status: ${testInfo.status}`);
});


export default test;
export const expect = baseTest.expect;
