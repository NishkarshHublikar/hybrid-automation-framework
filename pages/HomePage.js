import { expect } from "@playwright/test";
import BasePage from "./BasePage";

class HomePage extends BasePage {

    constructor(page) {
        super(page);

        this.logo = page.locator("img[alt='Website for automation practice']");

        this.signupLoginButton = page.locator("a[href='/login']");

        this.productsButton = page.locator("a[href='/products']");

        this.cartButton = page.locator("a[href='/view_cart']");

        this.contactUsButton = page.locator("a[href='/contact_us']");

        this.contactUsHeading = page.locator("text=Get In Touch");

        this.loggedInText = page.locator("text=Logged in as");

        this.deleteAccountButton = page.locator("a[href='/delete_account']");

        this.logoutButton = page.locator("a[href='/logout']");
    }

    async navigate() {
        await super.navigate("/");
    }

    async verifyHomePageLoaded() {
        await this.logo.waitFor();
    }

    async clickSignupLogin() {
        await this.click(this.signupLoginButton);
    }

    async clickProducts() {
        await this.click(this.productsButton);
    }

    async clickCart() {
        await this.click(this.cartButton);
    }

    async clickContactUs() {
        await this.click(this.contactUsButton);
    }

    async clickLogout() {
        await this.click(this.logoutButton);
    }

    async clickDeleteAccount() {
        await this.click(this.deleteAccountButton);
    }

    async verifyLoggedIn() {
        await this.loggedInText.waitFor();
    }

    async verifyContactUsPageLoaded() {
        await expect(this.contactUsHeading).toBeVisible();
    }
}

export default HomePage;