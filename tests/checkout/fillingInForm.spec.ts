import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';
import { products } from '../../data/products';

test('First name is required', async ({e2eFlow: e2e}) => {
    await e2e.catalog.addToCart(products.backpack);
    await e2e.catalog.goToCart();
    await e2e.cart.clickCheckout();
    await e2e.checkout.fillInLastName();
    await e2e.checkout.fillInPostalCode();
    await e2e.checkout.clickContinue();
    const errorMessage = await e2e.checkout.getErrorMessage();
    await expect(errorMessage).toContain('Error: First Name is required');
    });

    test('Last name is required', async ({e2eFlow: e2e}) => {
    await e2e.catalog.addToCart(products.backpack);
    await e2e.catalog.goToCart();
    await e2e.cart.clickCheckout();
    await e2e.checkout.fillInFirstName();
    await e2e.checkout.fillInPostalCode();
    await e2e.checkout.clickContinue();
    const errorMessage = await e2e.checkout.getErrorMessage();
    await expect(errorMessage).toContain('Error: Last Name is required');
    });

    test('Postal code is required', async ({e2eFlow: e2e}) => {
    await e2e.catalog.addToCart(products.backpack);
    await e2e.catalog.goToCart();
    await e2e.cart.clickCheckout();
    await e2e.checkout.fillInFirstName();
    await e2e.checkout.fillInLastName();
    await e2e.checkout.clickContinue();
    const errorMessage = await e2e.checkout.getErrorMessage();
    await expect(errorMessage).toContain('Error: Postal Code is required');
    });