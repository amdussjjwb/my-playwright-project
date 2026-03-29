import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// 🔥 Hook (login automatically hoga)
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

// ✅ Clean test
test('Cart Test', async ({ page }) => {
  await page.click('.shopping_cart_link');
  await expect(page).toHaveURL(/cart/);
});