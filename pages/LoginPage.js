import BasePage from "./BasePage";
import { expect } from "@playwright/test";

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.loginHeading =
            page.locator("text=Login to your account");

        this.signupHeading =
            page.locator("text=New User Signup!");

        this.emailInput =
            page.locator("input[data-qa='login-email']");

        this.passwordInput =
            page.locator("input[data-qa='login-password']");

        this.loginButton =
            page.locator("button[data-qa='login-button']");

        this.signupName =
            page.locator("input[data-qa='signup-name']");

        this.signupEmail =
            page.locator("input[data-qa='signup-email']");

        this.signupButton =
            page.locator("button[data-qa='signup-button']");

        this.invalidLoginMessage =
            page.locator("text=Your email or password is incorrect!");

        this.existingEmailMessage =
            page.locator("text=Email Address already exist!");
    }

    async verifyLoginPageLoaded() {

        await expect(this.loginHeading).toBeVisible();

        await expect(this.signupHeading).toBeVisible();

    }

    async login(email, password) {

        await this.fill(this.emailInput, email);

        await this.fill(this.passwordInput, password);

        await this.click(this.loginButton);

    }

    async signup(name, email) {

        await this.fill(this.signupName, name);

        await this.fill(this.signupEmail, email);

        await this.click(this.signupButton);

    }

    async verifyInvalidLogin() {

        await expect(
            this.invalidLoginMessage
        ).toBeVisible();

    }

    async verifyExistingEmail() {

        await expect(
            this.existingEmailMessage
        ).toBeVisible();

    }

}

export default LoginPage;