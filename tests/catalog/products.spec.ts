import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test('User sees product catalog', async ({ loggedInPage: page }) => {
    await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Product has title', async ({ loggedInPage: page }) => {
    await expect(page.locator('.inventory_item_name').first()).toBeVisible();
});

test('Product has description', async ({ loggedInPage: page }) => {
  await expect(page.locator('.inventory_item_desc').first()).toBeVisible();
});

test('Product has price', async ({ loggedInPage: page }) => {
    await expect(page.locator('.inventory_item_price').first()).toBeVisible();
});

test('Product has button "Add to Cart"', async ({ loggedInPage: page }) => {
    await expect(page.locator('.btn_inventory').first()).toBeVisible();
});
