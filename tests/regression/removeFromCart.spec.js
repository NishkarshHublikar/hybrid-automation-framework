import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';

test.describe('Regression - Remove From Cart', () => {

    test('Remove Product From Cart', async ({ page }) => {

        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await homePage.navigate();

        await homePage.clickProducts();

        await productsPage.addFirstProductToCart();

        await productsPage.viewCart();

        await cartPage.removeFirstProduct();

        await expect(cartPage.emptyCartMessage).toBeVisible();

    });

});