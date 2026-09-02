import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test('User can log out of the system', async ({ loggedInPage: page}) => {
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    });