import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Ошибка у locked_out_user', async ({ lockedOutPage: page }) => {
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
});