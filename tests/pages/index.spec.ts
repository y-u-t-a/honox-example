import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test('test index page', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'HonoX Example' })).toBeVisible();
});
