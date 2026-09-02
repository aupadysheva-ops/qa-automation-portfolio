import { Page } from '@playwright/test'
export class CheckoutOverviewPage {
  constructor(private page: Page) {}

  async cancel() {
    await this.page.click(`#cancel`);
  }

  async finish() {
    await this.page.click(`#finish`);
  }

}