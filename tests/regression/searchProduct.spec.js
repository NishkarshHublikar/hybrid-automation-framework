import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';

test.describe('Regression - Search Product', () => {

    test('Search Product Successfully', async ({ page }) => {

        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);

        await homePage.navigate();

        await homePage.clickProducts();

        await productsPage.verifyProductsPageLoaded();

        await productsPage.searchProduct('Blue Top');

        await page.pause();

        await productsPage.verifySearchResults();

        await expect(productsPage.searchedProduct).toContainText('Blue Top');

    });

});