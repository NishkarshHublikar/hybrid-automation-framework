import { test } from '@playwright/test';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import PaymentPage from '../../pages/PaymentPage';
import AccountPage from '../../pages/AccountPage';

import TestData from "../../utils/TestData";

test.describe('E2E - Complete Purchase Flow', () => {

    test('Complete Purchase Successfully', async ({ page }) => {

        test.setTimeout(180000);

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const paymentPage = new PaymentPage(page);
        const accountPage = new AccountPage(page);

        const user = TestData.generateUser();

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

        await homePage.clickProducts();

        await productsPage.verifyProductsPageLoaded();

        await productsPage.searchProduct("Blue Top");

        await productsPage.verifySearchResults();

        await productsPage.addFirstProductToCart();

        await productsPage.viewCart();

        await cartPage.verifyCartPageLoaded();

        await cartPage.proceedToCheckout();

        await checkoutPage.verifyCheckoutPageLoaded();

        await checkoutPage.addComment(
            "Automation Test using Playwright"
        );

        await checkoutPage.placeOrder();

        await paymentPage.fillPaymentDetails(
            user.name,
            "4111111111111111",
            "123",
            "12",
            "2030"
        );

        await paymentPage.confirmOrder();

        await paymentPage.verifyOrderPlaced();

        await accountPage.deleteAccount();

        await accountPage.verifyAccountDeleted();

    });

});