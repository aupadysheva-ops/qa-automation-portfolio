import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test('User can add a product to the cart', async ({catalogPage: catalog}) => {
    await catalog.addToCart('sauce-labs-backpack');
    await expect(catalog.getCartCount()).resolves.toBe('1');
});

test('User can add multiple products to the cart', async ({catalogPage: catalog}) => {
    await catalog.addToCart('sauce-labs-backpack');
    await catalog.addToCart('sauce-labs-bolt-t-shirt');
    await expect(catalog.getCartCount()).resolves.toBe('2');
});

test('Add to cart button changes to Remove', async ({ catalogPage: catalog }) => {
    await catalog.addToCart('sauce-labs-backpack');
    await expect(catalog.getCartCount()).resolves.toBe('1');
});

test('User can remove a product from the cart', async ({ catalogPage: catalog }) => {
    await catalog.addToCart('sauce-labs-backpack');
    await catalog.removeFromCart('sauce-labs-backpack');
    await expect(catalog.getCartCount()).resolves.toBe('0');
});