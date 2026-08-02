import { test, expect } from '@playwright/test';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

import TestData from '../utils/TestData';

test('User can navigate to registration form', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);

    const user = TestData.generateUser();

    await homePage.navigate();

    await homePage.clickSignupLogin();

    await loginPage.verifyLoginPageLoaded();

    await signupPage.signup(
        user.name,
        user.email
    );

    await expect(signupPage.accountInformationHeading).toBeVisible();

});