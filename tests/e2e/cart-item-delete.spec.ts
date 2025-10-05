import test from '../../utils/BaseTest';

test.describe('Cart Item Deletion Flow', () => {
  
  test('Add product to the cart, delete it, and verify the cart is empty', async ({ 
                        homePage, productPage, flyersPage, 
                        leafletPage, cartPage }) => {

    // Navigate through product flow
    await productPage.goToFlyersMenu();
    await flyersPage.navigateToHalfFoldLeaflets();

    // Select product options and add to cart
    await leafletPage.clickLandscape();
    await leafletPage.clickAddToCart();

    // Verify product is added to the cart
    await homePage.verifyTextByString('Your cart overview');
    await cartPage.verifyProductDetails([
        'Half fold leaflets',
        'Landscape']);

    // Delete the product from the cart
    await cartPage.deleteCartItemByHeading("Half fold leaflets", "Landscape" );

    // Verify the cart is empty
    await homePage.verifyTextByString('Your cart is empty.');
    await homePage.verifyTextNotPresent('Half fold leaflets');

    });
});