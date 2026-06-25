import { Page, Locator } from "@playwright/test";

export class CartPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkProductInCart(productName: string): Promise<boolean> {

        const products = await this.page
            .locator('#tbody tr td:nth-child(2)')
            .all();

        for (const product of products) {

            const name = (await product.textContent())?.trim();

            console.log(name);

            if (name === productName) {
                return true;
            }
        }

        return false;
    }
}