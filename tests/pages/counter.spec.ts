import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole("link", { name: "Counter" }).click()
  await page.waitForURL('/counter')
})

test('test Counter page', async ({ page }) => {
  await expect(counterValue(page)).toHaveText("0")

  await incriment(page)
  await expect(counterValue(page)).toHaveText("1")

  await decriment(page)
  await decriment(page)
  await expect(counterValue(page)).toHaveText("-1")

  await reset(page)
  await expect(counterValue(page)).toHaveText("0")
});

function counterValue(page: Page) {
  return page.locator("p")
}
async function incriment(page: Page) {
  return page.getByRole("button", { name: "+" }).click()
}
async function decriment(page: Page) {
  return page.getByRole("button", { name: "-" }).click()
}
async function reset(page: Page) {
  return page.getByRole("button", { name: "reset" }).click()
}