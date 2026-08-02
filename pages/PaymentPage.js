import { expect } from "@playwright/test";
import BasePage from "./BasePage";

class PaymentPage extends BasePage {

    constructor(page) {
        super(page);

        this.name =
            page.locator("input[data-qa='name-on-card']");

        this.card =
            page.locator("input[data-qa='card-number']");

        this.cvc =
            page.locator("input[data-qa='cvc']");

        this.month =
            page.locator("input[data-qa='expiry-month']");

        this.year =
            page.locator("input[data-qa='expiry-year']");

        this.payButton =
            page.locator("button[data-qa='pay-button']");

        this.successMessage =
            page.locator("text=Congratulations! Your order has been confirmed!");

    }

    async fillPaymentDetails(name, card, cvc, month, year) {

        await this.fill(this.name, name);

        await this.fill(this.card, card);

        await this.fill(this.cvc, cvc);

        await this.fill(this.month, month);

        await this.fill(this.year, year);

    }

    async confirmOrder() {
        await this.click(this.payButton);
    }

    async verifyOrderPlaced() {
        await expect(this.successMessage).toBeVisible();
    }

}

export default PaymentPage;