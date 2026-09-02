import { test } from '../../fixtures/fixtures';
import {cartWithItemsTest} from '../../fixtures/cartfixtures';
import { expect } from '@playwright/test';

test('User can open cart', async ({ loggedInPage: page}) => {
    await page.click('#shopping_cart_container');
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    });

cartWithItemsTest('Remove item from cart', async ({ cartWithItems }) => {
    await cartWithItems.removeFromCart('sauce-labs-backpack');
    const itemsCount = await cartWithItems.getCartItemsCount();
    await expect(itemsCount).toBe(1);
});