import { test } from '@playwright/test';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

test.describe('Smoke - Login Page', () => {

    test('Verify Login Page Loads Successfully', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.navigate();

        await homePage.clickSignupLogin();

        await loginPage.verifyLoginPageLoaded();

    });

});