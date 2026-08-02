import { test } from '@playwright/test';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import AccountPage from '../../pages/AccountPage';

import TestData from '../../utils/TestData';

test.describe('Regression - Logout', () => {

    test('Logout Successfully', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const accountPage = new AccountPage(page);

        const user = TestData.generateUser();

        await homePage.navigate();

        await homePage.clickSignupLogin();

        await loginPage.verifyLoginPageLoaded();

        // Register User
        await loginPage.signup(user.name, user.email);

        console.log(await page.url());

        await page.pause();

        await signupPage.verifySignupPageLoaded();

        await signupPage.fillAccountInformation(user);

        await signupPage.fillAddressInformation(user);

        await signupPage.createAccount();

        await signupPage.verifyAccountCreated();

        await accountPage.clickContinue();

        await accountPage.verifyLoggedIn();

        // Logout
        await accountPage.logout();

        // Verify Login Page
        await loginPage.verifyLoginPageLoaded();

    });

});