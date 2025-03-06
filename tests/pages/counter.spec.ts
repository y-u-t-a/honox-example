import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole("link", { name: "Counter" }).click()
  await page.waitForURL('/counter')
})

test('test Counter page', async ({ page }) => {
  const counterPage = new CounterPage(page)
  expect(await counterPage.value()).toBe("0")

  await counterPage.incriment()
  expect(await counterPage.value()).toBe("1")

  await counterPage.decriment()
  await counterPage.decriment()
  expect(await counterPage.value()).toBe("-1")

  await counterPage.reset()
  expect(await counterPage.value()).toBe("0")
});

class CounterPage {
  constructor(private page: Page) {}

  async value() {
    return this.page.locator("p").innerText()
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