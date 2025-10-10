import test from '../../utils/BaseTest';

test.describe('Product Checkout Flow', () => {
  
  test('Add half-folded leaflet to the cart and verify checkout details', async ({ 
                      homePage, productPage, flyersPage, 
                      leafletPage, cartPage }) => {

    // Navigate through product flow
    await productPage.goToFlyersMenu();
    await productPage.verifyHeadingByText('Leaflet Printing & Flyers');

    await flyersPage.navigateToHalfFoldLeaflets();
    await flyersPage.verifyHeadingByText('Half Fold Leaflets');


    // Select product options and add to cart
    await leafletPage.clickLandscape();
    await leafletPage.clickMattAppearance();
    await leafletPage.clickDoubleSidedFinishing();
    await leafletPage.clickAddToCart();

    // Verify cart overview page is displayed
    await homePage.verifyHeadingByText('Your cart overview');

    // Verify product details in the cart
    await cartPage.verifyProductDetails([
        'Half fold leaflets',
        '1.000', 
        'Half-fold',
        'Landscape',
        'A5 landscape',
        'Matt',
        'Double-sided Matte lamination'
    ]);


    // Verify pricing in cart overview
    await cartPage.verifyCartOverview([
     '€296.99'
    ]);

  });

});



