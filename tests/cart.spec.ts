import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Add to Cart Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addToCart();
  await inventoryPage.goToCart();

  // ✅ assertion
  await expect(page.locator('.cart_item')).toBeVisible();
});