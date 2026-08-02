import BasePage from "./BasePage";
import { expect } from "@playwright/test";

class SignupPage extends BasePage {

    constructor(page) {
        super(page);

        // Account Information
        this.accountHeading = page.locator("text=Enter Account Information");

        this.titleMr = page.locator("#id_gender1");
        this.titleMrs = page.locator("#id_gender2");

        this.password = page.locator("#password");

        this.day = page.locator("#days");
        this.month = page.locator("#months");
        this.year = page.locator("#years");

        this.newsletter = page.locator("#newsletter");
        this.specialOffers = page.locator("#optin");

        // Address Information
        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.company = page.locator("#company");

        this.address1 = page.locator("#address1");
        this.address2 = page.locator("#address2");

        this.country = page.locator("#country");

        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");

        this.mobile = page.locator("#mobile_number");

        this.createAccountButton =
            page.locator("button[data-qa='create-account']");

        this.accountCreatedHeading =
            page.locator("text=ACCOUNT CREATED!");
    }

    async verifySignupPageLoaded() {

        await expect(
            this.accountHeading
        ).toBeVisible();

    }

    async fillAccountInformation(user) {

        await this.click(this.titleMr);

        await this.fill(this.password, user.password);

        await this.select(this.day, "10");
        await this.select(this.month, "5");
        await this.select(this.year, "2003");

        await this.check(this.newsletter);
        await this.check(this.specialOffers);

    }

    async fillAddressInformation(user) {

        await this.fill(this.firstName, user.firstName);

        await this.fill(this.lastName, user.lastName);

        await this.fill(this.company, user.company);

        await this.fill(this.address1, user.address1);

        await this.fill(this.address2, user.address2);

        await this.select(this.country, user.country);

        await this.fill(this.state, user.state);

        await this.fill(this.city, user.city);

        await this.fill(this.zipcode, user.zipcode);

        await this.fill(this.mobile, user.mobile);

    }

    async createAccount() {

        await this.click(
            this.createAccountButton
        );

    }

    async verifyAccountCreated() {

        await expect(
            this.accountCreatedHeading
        ).toBeVisible();

    }

}

export default SignupPage;