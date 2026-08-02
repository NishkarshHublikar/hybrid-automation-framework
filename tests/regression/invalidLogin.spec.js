import { test } from '@playwright/test';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

test.describe('Regression - Invalid Login', () => {

    test('Login With Invalid Credentials', async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.navigate();

        await homePage.clickSignupLogin();

        await loginPage.verifyLoginPageLoaded();

        await loginPage.login(
            'invalid@gmail.com',
            'WrongPassword123'
        );

        await loginPage.verifyInvalidLogin();

    });

});