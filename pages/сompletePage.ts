import { Page } from '@playwright/test'
export class CompletePage {
  constructor(private page: Page) {}

  async goToBackHome() {
    await this.page.click(`#back-to-products`);
  }

  async generatePdf() {
    await this.page.click(`#generate-pdf-order`);
  }

  async getSuccessMessage() {
    return this.page.locator('#checkout_complete_container').textContent();
  }

  async getPageURL() {
    return this.page.url();
  }

}