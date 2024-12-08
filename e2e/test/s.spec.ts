import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://easyrentacar.shop/');
  await page.getByRole('link', { name: 'SignUp/SignIn' }).click();
});