import test from '../../utils/BaseTest';

test.describe('Verify country/language dropdown functionality', () => {

  test('Display all available countries correctly in the dropdown', async ({ homePage }) => {

    const expectedCountries = [
      'Belgium (Vlaams)',
      'Belgium (French)',
      'France',
      'Germany',
      'Ireland',
      'Italy',
      'Netherlands',
      'Spain',
      'Sweden',
      'United Kingdom',
      'United States'
    ];

    // Verify that all expected countries are visible in the dropdown
    await homePage.verifyAvailableCountriesInDropDown(expectedCountries);
  });

});