import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // ✅ assertion (IMPORTANT)
  await expect(page).toHaveURL(/inventory/);
});