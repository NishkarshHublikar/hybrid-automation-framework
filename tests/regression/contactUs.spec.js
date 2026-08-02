import { test } from '@playwright/test';

import HomePage from '../../pages/HomePage';

test.describe('Regression - Contact Us', () => {

    test('Navigate To Contact Us Page', async ({ page }) => {

        const homePage = new HomePage(page);

        await homePage.navigate();

        await homePage.clickContactUs();

        await homePage.verifyContactUsPageLoaded();

    });

});