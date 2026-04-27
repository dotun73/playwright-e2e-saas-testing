import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { users } from '../data/users';

test('User completes full purchase journey', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(users.standard.username, users.standard.password);

  await inventory.verifyInventoryLoaded();
  await inventory.addItemToCart();
  await inventory.goToCart();

  await cart.verifyItemInCart();
  await cart.proceedToCheckout();

  await checkout.fillCheckoutInfo('John', 'Doe', '12345');
  await checkout.finishOrder();

  await checkout.verifyOrderSuccess();
});

test('User session persists after refresh', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(users.standard.username, users.standard.password);

  await page.reload();

  await expect(page).toHaveURL(/inventory/);
});

test('Locked user cannot login', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(users.locked.username, users.locked.password);

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});