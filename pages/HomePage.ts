import { Page, Locator } from "@playwright/test";

export class HomePage {

    private readonly page: Page;
    private readonly ProductsList: Promise<Array<Locator>>;
    private readonly addToCartButton: Locator;
    private readonly CartLink: Locator;

    constructor(page: Page) {

        this.page = page;

        // Css selector targeting all product links under the product cards
        this.ProductsList = this.page.locator('div#bodyid div.card h4.card-title a').all();

        // Add to cart button
        this.addToCartButton = this.page.locator('a:has-text("Add to Cart")');

        // Cart link in the top menu
        this.CartLink = this.page.locator('#cartur');
    }

    // Method to add a specific product to cart
    async addProductToCart(productName: string): Promise<void> {

        const productElements = this.ProductsList;

        for (const product of await productElements) {

            const name = await product.textContent();

            if (name?.trim() === productName) {

                await product.click();

                await this.clickAddToCart();

                break;
            }
        }
    }

    // Handle alert/dialog after clicking Add to Cart
    async clickAddToCart(): Promise<void> {

        this.page.once('dialog', async (dialog) => {

            if (dialog.message().includes('added')) {

                await dialog.accept();
            }
        });

        await this.addToCartButton.click();
    }

    // Method to navigate to the cart
    async gotoCart(): Promise<void> {

        await this.CartLink.click();
    }
}