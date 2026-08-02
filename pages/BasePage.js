class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(path = "/") {

        const url = path.startsWith("http")
            ? path
            : `https://automationexercise.com${path}`;

        await this.page.goto(url, {
            waitUntil: "commit",
            timeout: 60000
        });

    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async select(locator, value) {
        await locator.selectOption(value);
    }

    async check(locator) {
        if (!(await locator.isChecked())) {
            await locator.check();
        }
    }

    async uncheck(locator) {
        if (await locator.isChecked()) {
            await locator.uncheck();
        }
    }

    async wait(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }

    async waitForUrl(url) {
        await this.page.waitForURL(url);
    }

    async getText(locator) {
        return await locator.textContent();
    }

    async isVisible(locator) {
        return await locator.isVisible();
    }

    async isHidden(locator) {
        return await locator.isHidden();
    }

    async getTitle() {
        return await this.page.title();
    }

    async getUrl() {
        return this.page.url();
    }

    async screenshot(name) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }
}

export default BasePage;