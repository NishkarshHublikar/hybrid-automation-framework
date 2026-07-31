import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

test('Navigate to Login Page Successfully', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigate();
    await homePage.clickSignupLogin();
    await loginPage.verifyLoginPageLoaded();
    await expect(loginPage.loginHeading).toBeVisible();
    await expect(loginPage.signupHeading).toBeVisible();
});
