import test from '../../utils/BaseTest';

test.describe('Checkout Flow', () => {
  test('should complete half-folded leaflet checkout', async ({ homePage, productPage, flyersPage, leafletPage, cartPage }) => {
    // Navigate to base URL
    await homePage.goToBaseUrl();

    // Navigate through product flow
    await productPage.goToFlyersMenu();
    // await productPage.verifyTextByString('Leaflet Printing');
    await flyersPage.navigateToHalfFoldLeaflets();

    // Select product options
    await leafletPage.clickLandscape();
    await leafletPage.clickMattMatt();
    await leafletPage.clickAddToCart();

    // Verify cart overview
    await cartPage.verifyHeading('Your cart overview');
    await cartPage.verifyQuantity('1.000');
    await cartPage.verifyProductType('Half-fold');
    await cartPage.verifyOrientation('Landscape');
    await cartPage.verifyPaperType('350gsm Silk');
    await cartPage.verifyFinishing('No Finishing');
    await cartPage.verifyDeliveryTime('Six working days');
    await cartPage.verifyTotal('Total €264.43');
  });
});