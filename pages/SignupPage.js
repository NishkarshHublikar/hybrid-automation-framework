import BasePage from './BasePage';

class SignupPage extends BasePage {
    constructor(page) {
        super(page);

        this.nameInput = page.locator("input[data-qa='signup-name']");
        this.emailInput = page.locator("input[data-qa='signup-email']");
        this.signupButton = page.locator("button[data-qa='signup-button']");

        this.accountInformationHeading = page.locator("text='Enter Account Information'");
    }

    async signup(name, email) {
        await this.fill(this.nameInput, name);
        await this.fill(this.emailInput, email);
        await this.click(this.signupButton);
    }
}

export default SignupPage;