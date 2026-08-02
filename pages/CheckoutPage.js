import { expect } from "@playwright/test";
import BasePage from "./BasePage";

class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);

        this.addressHeading =
            page.locator("text=Address Details");

        this.commentBox =
            page.locator("textarea");

        this.placeOrderButton =
            page.locator("a:has-text('Place Order')");

    }

    async verifyCheckoutPageLoaded() {

        await expect(this.page).toHaveURL(/checkout/);

    }

    async addComment(comment) {
        await this.fill(this.commentBox, comment);
    }

    async placeOrder() {
        await this.click(this.placeOrderButton);
    }

}

export default CheckoutPage;