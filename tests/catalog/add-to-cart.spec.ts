import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';
import { products } from '../../data/products';

test('User can add a product to the cart', async ({catalogPage: catalog}) => {
    await catalog.addToCart(products.backpack);
    await expect(catalog.getCartCount()).resolves.toBe('1');
});

test('User can add multiple products to the cart', async ({catalogPage: catalog}) => {
    await catalog.addToCart(products.backpack);
    await catalog.addToCart(products.boltTShirt);
    await expect(catalog.getCartCount()).resolves.toBe('2');
});

test('Add to cart button changes to Remove', async ({ catalogPage: catalog }) => {
    await catalog.addToCart(products.backpack);
    await expect(catalog.page.locator(`#remove-${products.backpack}`)).toBeVisible();
});

test('User can remove a product from the cart', async ({ catalogPage: catalog }) => {
    await catalog.addToCart(products.backpack);
    await catalog.removeFromCart(products.backpack);
    await expect(catalog.page.locator(`#add-to-cart-${products.backpack}`)).toBeVisible();
});