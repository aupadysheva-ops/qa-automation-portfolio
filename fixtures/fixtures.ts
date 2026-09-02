import { test as base, Page } from '@playwright/test';
import { CatalogPage } from '../pages/catalog';
import { CartPage } from '../pages/cart';
import { CheckoutPage } from '../pages/checkoutYourInformation';
import {CheckoutOverviewPage} from '../pages/сheckoutOverview';
import { CompletePage } from '../pages/сompletePage';
import { E2EFlow} from '../pages/e2e';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

type SaucedemoFixtures = {
  loggedInPage: Page; // standard_user (успешный логин)
  problemUserPage: Page; // problem_user
  lockedOutPage: Page; // locked_out_user
  catalogPage: CatalogPage; // catalog (inventory.html)
  cartPage: CartPage; // cart (cart.html)
  checkoutPage: CheckoutPage; // checkout (checkout-step-one.html)
  checkoutOverviewPage: CheckoutOverviewPage; // checkout overview (checkout-step-two.html)
  completePage: CompletePage; // complete (checkout-complete.html)
  e2eFlow: E2EFlow; // e2e (checkout-complete.html)
};

export const test = base.extend<SaucedemoFixtures>({

  // standard_user
  loggedInPage: async ({ page }, use) => {
    await loginAs(page, 'standard_user');
    await page.waitForURL(/.*inventory.html/);
    await use(page);
  },

  // problem_user
  problemUserPage: async ({ page }, use) => {
    await loginAs(page, 'problem_user');
    await page.waitForURL(/.*inventory.html/);
    await use(page);
  },

  // locked_out_user
  lockedOutPage: async ({ page }, use) => {
    await loginAs(page, 'locked_out_user');
    await use(page);
  },

  // catalog page (inventory.html)
    catalogPage: async ({ loggedInPage: page }, use) => {
    const catalog = new CatalogPage(page);
    await use(catalog);
  },
  // cart page (cart.html)
  cartPage: async ({ loggedInPage: page }, use) => {
    const cart = new CartPage(page);
    await use(cart);
  },

  // checkout page (checkout-step-one.html)
  checkoutPage: async ({ loggedInPage: page }, use) => {
    const checkout = new CheckoutPage(page);
    await use(checkout);
  },
  
  // checkout overview page (checkout-step-two.html)  
    checkoutOverviewPage: async ({ loggedInPage: page }, use) => {
    const checkoutOverview = new CheckoutOverviewPage(page);
    await use(checkoutOverview);
  },

  // complete page (checkout-complete.html)
  completePage: async ({ loggedInPage: page }, use) => {
    const complete = new CompletePage(page);
    await use(complete);
  },

  // e2e flow (checkout-complete.html)
  e2eFlow: async ({ loggedInPage: page }, use) => {
    const e2e = new E2EFlow(page);
    await use(e2e);
  },
});

async function loginAs(page: Page, username: string) {
  const password = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
}