import { Page } from '@playwright/test'
export class CatalogPage {
  constructor(public page: Page) {}

  async addToCart(productName: string) {
    await this.page.click(`#add-to-cart-${productName}`);
  }

  async getCartCount() {
    return this.page.locator('.shopping_cart_badge').textContent();
  }

  async goToCart() {
    await this.page.click('#shopping_cart_container');
  }
    async getRemoveButton(productName: string) {
    return this.page.locator(`#remove-${productName}`);
  }

  async removeFromCart(productName: string) {
    await this.page.click(`#remove-${productName}`);
  }
}