import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test.skip('Bing search using POM', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.goto();
  await searchPage.search('playwright');

  await page.waitForSelector('#b_results');

  await expect(page).toHaveURL(/playwright/i);

  await expect(page.locator('#b_results')).toBeVisible();
});