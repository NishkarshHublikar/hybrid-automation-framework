import BasePage from './BasePage';

class HomePage extends BasePage {
    constructor(page) {
        super(page);

        this.signupLoginButton = page.locator("a[href='/login']");
        this.productsButton = page.locator("a[href='/products']");
        this.cartButton = page.locator("a[href='/view_cart']");
        this.contactUsButton = page.locator("a[href='/contact_us']");
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
}

export default HomePage;