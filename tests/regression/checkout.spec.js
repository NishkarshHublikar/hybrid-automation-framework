import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import AccountPage from '../../pages/AccountPage';

import TestData from '../../utils/TestData';

test.describe('Regression - Checkout', () => {

    test('Proceed To Checkout Successfully', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const accountPage = new AccountPage(page);

        const user = TestData.generateUser();

        // Register User
        await homePage.navigate();

        await homePage.clickSignupLogin();

        await loginPage.verifyLoginPageLoaded();

        await loginPage.signup(
            user.name,
            user.email
        );

        await signupPage.verifySignupPageLoaded();

        await signupPage.fillAccountInformation(user);

        await signupPage.fillAddressInformation(user);

        await signupPage.createAccount();

        await signupPage.verifyAccountCreated();

        await accountPage.clickContinue();

        await accountPage.verifyLoggedIn();

        // Product Flow
        await homePage.clickProducts();

        await productsPage.verifyProductsPageLoaded();

        await productsPage.addFirstProductToCart();

        await productsPage.viewCart();

        await cartPage.verifyCartPageLoaded();

        await cartPage.proceedToCheckout();

        await checkoutPage.verifyCheckoutPageLoaded();

        await expect(page).toHaveURL(/checkout/);

    });

}); 