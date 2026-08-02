import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';

import TestData from '../../utils/TestData';

test("User can register successfully", async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);

    const user = TestData.generateUser();

    await homePage.navigate();

    await homePage.clickSignupLogin();

    await loginPage.verifyLoginPageLoaded();

    await loginPage.signup(
        user.name,
        user.email
    );

    await expect(signupPage.accountHeading).toBeVisible({
        timeout: 30000
    });

    await signupPage.fillAccountInformation(user);

    await signupPage.fillAddressInformation(user);

    await signupPage.createAccount();

    await expect(
        signupPage.accountCreatedHeading
    ).toBeVisible();

});