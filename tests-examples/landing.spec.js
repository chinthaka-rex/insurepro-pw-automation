// @ts-check
const { test, expect } = require('@playwright/test');

test('insurepro - landing page has button to go next', async ({ page }) => {
  await page.goto('https://app.qa.insurepro.com/');

  // Expect a title "to contain" a string.
  await expect(page).toHaveTitle(/InsurePro/);

  // create a locator
  const getAQuote = page.getByRole('button', { name: 'GET A QUOTE' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getAQuote).toHaveText('Get a Quote');

  // Click the get started link.
  await getAQuote.click();
  
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*user-details/);
});