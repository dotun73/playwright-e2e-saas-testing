import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemToCart() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async verifyInventoryLoaded() {
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }
}