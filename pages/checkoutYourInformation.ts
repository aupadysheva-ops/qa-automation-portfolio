import { Page } from '@playwright/test'; 
import { faker } from '@faker-js/faker';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInAllForm(data?: { firstName?: string; lastName?: string; postalCode?: string }) {
    await this.page.fill('#first-name', data?.firstName || faker.person.firstName());
    await this.page.fill('#last-name', data?.lastName || faker.person.lastName());
    await this.page.fill('#postal-code', data?.postalCode || faker.location.zipCode());
  }

  async fillInFirstName(data: { firstName: string }) {
    await this.page.fill('#first-name', faker.person.firstName());
  }

  async fillInLastName(data: { lastName: string }) {
    await this.page.fill('#last-name', faker.person.lastName());
  }

  async fillInPostalCode(data: { postalCode: string }) {
    await this.page.fill('#postal-code', faker.location.zipCode());
  }

  async clickContinue() {
    await this.page.click('#continue');
  }

  async clickCancel() {
    await this.page.click('#cancel');
  }

}