import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Sorting by name A-Z', async ({ loggedInPage: page }) => {
await page.selectOption('[data-test="product-sort-container"]', 'az');
  const productNames = await page.locator('.inventory_item_name').allTextContents();
  const sortedNames = productNames.slice();
  sortedNames.sort(function (a, b) {
    return a.localeCompare(b);
  });
  expect(productNames).toEqual(sortedNames);
});

test('Sorting by name Z-A', async ({ loggedInPage: page }) => {
await page.selectOption('[data-test="product-sort-container"]', 'za');
  const productNames = await page.locator('.inventory_item_name').allTextContents();
  const sortedNames = productNames.slice();
  sortedNames.sort(function (a, b) {
    return b.localeCompare(a);
  });
  expect(productNames).toEqual(sortedNames);
});

test('Sorting by price low to high', async ({ loggedInPage: page }) => {
  await page.selectOption('[data-test="product-sort-container"]', 'lohi');
  const pricesText = await page.locator('.inventory_item_price').allTextContents();
  const prices: number[] = [];
  for (const priceText of pricesText) {
    const cleanPrice = priceText.replace('$', '');
    const numberPrice = parseFloat(cleanPrice);
    prices.push(numberPrice);
  }
  const sortedPrices = prices.slice();
  sortedPrices.sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);
});

test('Sorting by price high to low', async ({ loggedInPage: page }) => {
  await page.selectOption('[data-test="product-sort-container"]', 'hilo');
  const pricesText = await page.locator('.inventory_item_price').allTextContents();
  const prices: number[] = [];
  for (const priceText of pricesText) {
    const cleanPrice = priceText.replace('$', '');
    const numberPrice = parseFloat(cleanPrice);
    prices.push(numberPrice);
  }
  const sortedPrices = prices.slice();
  sortedPrices.sort((a, b) => b - a);
  expect(prices).toEqual(sortedPrices);
});