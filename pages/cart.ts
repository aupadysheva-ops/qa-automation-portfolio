import { Page } from '@playwright/test'

export class CartPage {
  constructor(public page: Page) {}

  async continueShopping() {
    await this.page.click('#continue-shopping');
  }

async clickCheckout() {
    await this.page.click('#checkout');
  }
  async removeFromCart(productName: string) {
    await this.page.click(`#remove-${productName}`);
  }

  async getCartItemsCount() {
  return this.page.locator('.cart_item').count();
}

async getEmptyCartMessage() {
  return this.page.locator('text=Your cart is empty').isVisible();
}
}