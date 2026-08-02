import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';

test.describe('Smoke - Products Page', () => {

    test('Verify Products Page Loads Successfully', async ({ page }) => {

        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);

        await homePage.navigate();

        await homePage.clickProducts();

        await productsPage.verifyProductsPageLoaded();

        await expect(page).toHaveURL(/products/);

    });

});