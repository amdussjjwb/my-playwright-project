import { Page } from '@playwright/test';

export class InventoryPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart() {
    await this.page.locator('.inventory_item button').first().click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}