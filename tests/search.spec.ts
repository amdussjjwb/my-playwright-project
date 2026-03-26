import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test('Bing search using POM', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.goto();
  await searchPage.search('playwright');

  // ✅ wait for results
  await page.waitForSelector('#b_results');

  // ✅ URL check
  await expect(page).toHaveURL(/playwright/i);

  // ✅ result visible check (better)
  await expect(page.locator('#b_results')).toBeVisible();
});