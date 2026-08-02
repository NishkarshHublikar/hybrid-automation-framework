import BasePage from "./BasePage";
import { expect } from "@playwright/test";

class AccountPage extends BasePage {

    constructor(page) {
        super(page);

        this.continueButton =
            page.locator("a[data-qa='continue-button']");

        this.loggedInText =
            page.locator("text=Logged in as");

        this.deleteAccountButton =
            page.locator("a[href='/delete_account']");

        this.accountDeleted =
            page.locator("text=ACCOUNT DELETED!");

        this.logoutButton =
            page.locator("a[href='/logout']");
    }

    async clickContinue() {
        await this.click(this.continueButton);
    }

    async verifyLoggedIn() {
        await expect(this.loggedInText).toBeVisible();
    }

    async deleteAccount() {
        await this.click(this.deleteAccountButton);
    }

    async verifyAccountDeleted() {
        await expect(this.accountDeleted).toBeVisible();
    }

    async logout() {
        await this.click(this.logoutButton);
    }

}

export default AccountPage;