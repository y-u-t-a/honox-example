import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole("link", { name: "Counter" }).click()
  await page.waitForURL('/counter')
})

test('test Counter page', async ({ page }) => {
  const counterPage = new CounterPage(page)
  await expect(counterPage.value()).toHaveText("0")

  await counterPage.incriment()
  await expect(counterPage.value()).toHaveText("1")

  await counterPage.decriment()
  await counterPage.decriment()
  await expect(counterPage.value()).toHaveText("-1")

  await counterPage.reset()
  await expect(counterPage.value()).toHaveText("0")
});

class CounterPage {
  constructor(private page: Page) {}

  value() {
    return this.page.locator("p")
  }
  async incriment() {
    return this.page.getByRole("button", { name: "+" }).click()
  }
  async decriment() {
    return this.page.getByRole("button", { name: "-" }).click()
  }
  async reset() {
    return this.page.getByRole("button", { name: "reset" }).click()
  }
}