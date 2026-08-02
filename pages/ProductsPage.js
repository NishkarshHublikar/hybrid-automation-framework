import { expect } from "@playwright/test";
import BasePage from "./BasePage";

class ProductsPage extends BasePage {

    constructor(page) {
        super(page);

        this.productsHeading =
            page.getByRole("heading", { name: "All Products" });

        this.searchInput =
            page.locator("#search_product");

        this.searchButton =
            page.locator("#submit_search");

        this.searchedProductsHeading =
            page.locator("h2.title.text-center").last();

        this.searchedProduct =
            page.locator(".productinfo p").first();

        this.firstProduct =
            page.locator(".product-image-wrapper").first();

        this.firstAddToCart =
            page.locator(".overlay-content a.add-to-cart").first();

        this.continueShoppingButton =
            page.getByRole("button", { name: "Continue Shopping" });

        this.viewCartLink =
            page.locator("p.text-center a[href='/view_cart']");

        this.viewProductButton =
            page.locator("a[href*='/product_details']").first();
    }

    async verifyProductsPageLoaded() {

        await expect(this.page).toHaveURL(/products/);

        await expect(this.productsHeading)
            .toContainText("All Products");

    }

    async searchProduct(product) {

        await this.fill(this.searchInput, product);

        await this.click(this.searchButton);

    }

    async verifySearchResults() {

        await expect(this.searchedProduct)
            .toContainText("Blue Top");

    }

    async addFirstProductToCart() {

        await this.firstProduct.scrollIntoViewIfNeeded();

        await this.firstProduct.hover();

        await expect(this.firstAddToCart)
            .toBeVisible();

        await this.firstAddToCart.click();

    }

    async continueShopping() {

        await this.click(this.continueShoppingButton);

    }

    async viewCart() {

        await this.page.locator("#cartModal").waitFor();

        await this.page
            .locator("#cartModal a[href='/view_cart']")
            .click();

    }

    async viewFirstProduct() {

        await this.click(this.viewProductButton);

    }

}

export default ProductsPage;