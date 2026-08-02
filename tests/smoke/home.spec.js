import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';

test('Verify home page loads successfully', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(homePage.signupLoginButton).toBeVisible();
});