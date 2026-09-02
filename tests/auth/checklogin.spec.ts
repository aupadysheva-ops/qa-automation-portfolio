import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Valid user can log in', async ({ loggedInPage: page }) => {
    await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Problematic user can log in', async ({ problemUserPage: page }) => {
    await expect(page.locator('.inventory_list')).toBeVisible();
});