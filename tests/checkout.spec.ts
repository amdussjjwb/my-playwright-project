import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete Checkout Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  // ✅ Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // ✅ Add product
  await inventoryPage.addToCart();

  // ✅ Go to cart
  await inventoryPage.goToCart();

  // ✅ Checkout
  await page.locator('#checkout').click();

  // ✅ Fill details
  await checkoutPage.checkoutInfo('John', 'Doe', '500001');

  // ✅ Finish
  await checkoutPage.finishOrder();

  // ✅ Assertion (success message)
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});