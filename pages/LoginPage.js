import BasePage from './BasePage';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.loginHeading = page.locator("text = Login to your account");
        this.signupHeading = page.locator("text = New User Signup");
    }
    async verifyLoginPageLoaded() {
        await this.loginHeading.waitFor();
        await this.signupHeading.waitFor();
    }
}
export default LoginPage;
