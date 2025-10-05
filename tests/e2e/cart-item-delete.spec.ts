import test from '../../utils/BaseTest';
import { HomePage } from '../../pages/HomePage';
import { CommonActions } from '../../utils/CommonActions';

test.describe('Cart delete Flow', () => {
  
  test('should complete half-folded leaflet checkout', async ({ homePage, productPage, flyersPage, leafletPage, cartPage }) => {
    // Navigate to base URL
    await homePage.goToBaseUrl();

    // Navigate through product flow
    await productPage.goToFlyersMenu();
    await flyersPage.navigateToHalfFoldLeaflets();

    // Select product options
    await leafletPage.clickLandscape();

    await leafletPage.clickAddToCart();

    await homePage.verifyTextByString('Your cart overview');

    await cartPage.verifyProductDetails([
        'Half fold leaflets',
        'Landscape']);

    await cartPage.deleteCartItemByHeading("Half fold leaflets", "Landscape" );

    await homePage.verifyTextByString('Your cart is empty.');
    await homePage.verifyTextNotPresent('Half fold leaflets');



    });
});