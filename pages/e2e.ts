import { Page } from '@playwright/test';
import { CatalogPage } from './catalog';
import { CartPage } from './cart';
import { CheckoutPage } from './checkoutYourInformation';
import {CheckoutOverviewPage} from './сheckoutOverview';
import { CompletePage } from './сompletePage';

export class E2EFlow {
  catalog: CatalogPage;
  cart: CartPage;
  checkout: CheckoutPage;
  checkoutOverview: CheckoutOverviewPage;
  complete: CompletePage;

  constructor(page: Page) {
    this.catalog = new CatalogPage(page);
    this.cart = new CartPage(page);
    this.checkout = new CheckoutPage(page);
    this.checkoutOverview = new CheckoutOverviewPage(page);
    this.complete = new CompletePage(page);
  }
}