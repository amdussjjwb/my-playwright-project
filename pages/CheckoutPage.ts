import { Page } from '@playwright/test';

export class CheckoutPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkoutInfo(firstName: string, lastName: string, zip: string) {
    await this.page.locator('#first-name').fill(firstName);
    await this.page.locator('#last-name').fill(lastName);
    await this.page.locator('#postal-code').fill(zip);
    await this.page.locator('#continue').click();
  }

  async finishOrder() {
    await this.page.locator('#finish').click();
  }
}