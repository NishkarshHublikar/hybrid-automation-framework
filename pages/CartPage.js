import { expect } from "@playwright/test";
import BasePage from "./BasePage";

class CartPage extends BasePage {

    constructor(page) {
        super(page);

        this.cartTable =
            page.locator("#cart_info");

        this.proceedButton =
            page.locator("a:has-text('Proceed To Checkout')");

        this.removeButton =
            page.locator(".cart_quantity_delete").first();

        this.emptyCartMessage =
            page.locator("text=Cart is empty");

    }

    async verifyCartPageLoaded() {
        await expect(this.cartTable).toBeVisible();
    }

    async removeFirstProduct() {
        await this.click(this.removeButton);
    }

    async proceedToCheckout() {
        await this.click(this.proceedButton);
    }

}

export default CartPage;