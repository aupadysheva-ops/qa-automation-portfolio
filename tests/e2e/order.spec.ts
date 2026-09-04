import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';
import { products } from '../../data/products';
//import { customers } from '../../data/users';


test('Successful purchase', async ({e2eFlow: e2e}) => {
    await e2e.catalog.addToCart(products.backpack);
    await e2e.catalog.goToCart();
    await e2e.cart.clickCheckout();
    await e2e.checkout.fillInAllForm();
    await e2e.checkout.clickContinue();
    await e2e.checkoutOverview.finish();
    const url = await e2e.complete.getPageURL();
    const message = await e2e.complete.getSuccessMessage();
    
    await expect(url).toContain('https://www.saucedemo.com/checkout-complete.html');
    await expect(message).toContain('Thank you for your order!');
    });