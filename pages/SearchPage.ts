import { Page } from '@playwright/test';

export class SearchPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.bing.com');
  }

  async search(text: string) {
    const searchBox = this.page.locator('#sb_form_q'); // Bing search box

    await searchBox.fill(text);
    await searchBox.press('Enter');
  }
}