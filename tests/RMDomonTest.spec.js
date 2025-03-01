import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com./');
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('test1');
 // await page.locator('[data-test="lastName"]').fill('2');
  let lastname= page.locator('[data-test="lastName"]');

  //await expect(lastname).toBeVisible();
  expect(lastname).toBeFalsy();
  
  await lastname.fill('John');

  await page.close();

  
 
});