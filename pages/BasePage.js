class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(path = '/') {
        await this.page.goto(path, {
            waitUntil: 'domcontentloaded'
        });
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async getTitle() {
        return await this.page.title();
    }

    async waitFor(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }

    async getCurrentUrl() {
        return this.page.url();
    }
}

export default BasePage;