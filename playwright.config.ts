import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  webServer: {
    command: "npm run dev -- --port 5473",
    url: 'http://localhost:5473',
    reuseExistingServer: true,
  },
  use: {
    baseURL: "http://localhost:5473",
    trace: 'on-first-retry',
  },
});
