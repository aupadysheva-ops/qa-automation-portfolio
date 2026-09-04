import { test } from './fixtures';
import { CatalogPage } from '../pages/catalog';
import { CartPage } from '../pages/cart';
import {products} from '../data/products';

type CartWithItemsFixtures = {
  cartWithItems: CartPage;
};

export const cartWithItemsTest = test.extend<CartWithItemsFixtures>({
cartWithItems: async ({ loggedInPage: page }, use) => {
  const catalog = new CatalogPage(page);
  const cart = new CartPage(page);
  
  await catalog.addToCart(products.backpack);
  await catalog.addToCart(products.boltTShirt);
  
  await catalog.goToCart();
  await page.waitForURL('**/cart.html');
  
  await use(cart);
},
});