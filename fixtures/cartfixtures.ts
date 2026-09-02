import { test } from './fixtures';
import { CatalogPage } from '../pages/catalog';
import { CartPage } from '../pages/cart';

type CartWithItemsFixtures = {
  cartWithItems: CartPage;
};

export const cartWithItemsTest = test.extend<CartWithItemsFixtures>({
cartWithItems: async ({ loggedInPage: page }, use) => {
  const catalog = new CatalogPage(page);
  const cart = new CartPage(page);
  
  await catalog.addToCart('sauce-labs-backpack');
  await catalog.addToCart('sauce-labs-bolt-t-shirt');
  
  await catalog.goToCart();
  await page.waitForURL('**/cart.html');
  
  await use(cart);
},
});