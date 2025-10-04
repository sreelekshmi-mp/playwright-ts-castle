import test from '../../utils/BaseTest';
import { HomePage } from '../../pages/HomePage';
import { CommonActions } from '../../utils/CommonActions';

test.describe('Checkout Flow', () => {
  
  test('should complete half-folded leaflet checkout', async ({ homePage, productPage, flyersPage, leafletPage, cartPage }) => {
    // Navigate to base URL
    await homePage.goToBaseUrl();

    // Navigate through product flow
    await productPage.goToFlyersMenu();
    await flyersPage.navigateToHalfFoldLeaflets();

    // Select product options
    await leafletPage.clickLandscape();
    await leafletPage.clickMattAppearance();
    await leafletPage.clickDoubleSidedFinishing();
    await leafletPage.clickAddToCart();

    await homePage.verifyTextByString('Your cart overview');

    await cartPage.verifyProductDetails([
        '1.000', 
        'Half-fold',
        'Landscape',
        'A5 landscape',
        'Matt',
        'Double-sided Matte lamination'
    ]);


    await cartPage.verifyCartOverview([
     '€296.99'
    ]);

  });

// test('should search for a product and navigate to its page', async ({ homePage}) => {

//     // Navigate to base URL
//     await homePage.goToBaseUrl();

//     // Fill search box and select product from dropdown
//     await homePage.searchAndSelect('Stationary', 'Stationary');

//     // Optionally, verify the heading of the resulting page
//     await homePage.verifyTextByString('Stationary Printing');
//   });

});
