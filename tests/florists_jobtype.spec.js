import { test, expect } from "@playwright/test";

test("Verify the rate page appearance for the florist job type", async ({
  page,
}) => {
  await page.goto("https://app.qa.insurepro.com/");
  await page.getByRole("button", { name: "Get a Quote" }).click();
  await page.getByText("I need it for my business").click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Mobile App" }).click();
  await page.getByRole("button", { name: "Cancel Anytime" }).click();
  await page.getByRole("button", { name: "VIEW ALL FEATURES" }).click();
  await page.getByRole("button", { name: "Phone Support" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("textbox", { name: "Policyholder's First Name" }).fill("qacwauto001 a");
  await page.getByRole("textbox", { name: "Policyholder's Last Name" }).fill("qacwauto001 b");
  await page.getByPlaceholder("(###) ###-####").type("5623489563");
  await page.getByRole("textbox", { name: "Policyholder's email address" }).fill("qacwauto001@rex.com");
  await page.getByRole("textbox", { name: "Business Name" }).fill("qacwauto001");
  await page.getByLabel("Business Address").fill("78625");
  await page.getByRole("textbox", { name: "City" }).fill("Austin");
  await page.getByRole("button", { name: "State" }).click();
  await page.getByRole("listbox", { name: "State" }).getByText("TX").click();
  await page.getByRole("textbox", { name: "Zipcode" }).fill("78625");
  await page.waitForTimeout(10000)
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByLabel("Business Type").click();
  await page.getByLabel("Business Type").type("florists");
  await page.getByRole("button", { name: "Florists" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Coverage Type ▾" }).click();
  await page.getByRole('option', { name: 'General Liability' }).locator('label').click();
  await page.getByRole("button", { name: "Coverage Type ▾" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole('textbox', { name: 'Founding Year of Business' }).click();
  await page.getByRole('textbox', { name: 'Founding Year of Business' }).fill('2000');
  await page.getByRole('button', { name: 'Legal Entity Type' }).click();
  await page.getByText('Sole Proprietorship').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Estimated gross revenue' }).type('$5000');
  await page.getByRole('textbox', { name: 'Business owner(s) only What is your estimated payroll for the next 12 months?' }).type('$2000');
  await page.getByRole('textbox', { name: '1099 contractors What is your estimated payroll for the next 12 months?' }).type('$1000');
  await page.waitForSelector("button", { name: "Continue" })
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForSelector('button', { name: 'Policy start date'})
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.waitForSelector()
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('button', { name: 'County' }).click();
  await page.getByRole('listbox', { name: 'County' }).getByText('Dallas county').click();
  // await page.getByRole('group', { name: 'Is your business operated out of your home?' }).getByText('No').click();
  // await page.getByRole('group', { name: 'Does your business provide any of the following operations, goods, or services? Auto, boat, or utility vehicle parts and dealers Convenience stores Department stores Farming or gardening supply stores Auto repair or gas stations Health food, vitamin, or drug stores Grocery stores Pet or pet supply stores Restaurants, bars, or nightclubs Alcohol, tobacco, electronic cigarette, or vapor stores Gun, firearm, or ammunition stores' }).getByText('No').click();
  // await page.getByRole('button', { name: 'Continue' }).click();
  // await page.getByText('No').click();
  // await page.getByRole('button', { name: 'Continue' }).click();
  // await page.getByRole('group', { name: 'In the past three years, have you had any business insurance cancelled or non-renewed by your insurance company, other than for non-payment of premium?' }).locator('label').filter({ hasText: 'No' }).locator('span').click();
  // await page.getByRole('group', { name: 'Has your business operated without insurance for 6 months or more since the business started?' }).getByText('No').click();
  // await page.getByRole('button', { name: 'How long has your business had General Liability insurance?' }).click();
  // await page.getByText('0 years').click();
  // await page.getByRole('group', { name: 'Does your business require certificates of insurance from sub-contractors?' }).getByText('No').click();
  // await page.getByRole('group', { name: 'Does your business require all sub-contractors to carry liability limits equal to yours?' }).getByText('No').click();
  // await page.getByRole('group', { name: 'Does your business require written contracts with all sub-contractors?' }).getByText('No').click();
  // await page.getByRole('button', { name: 'Continue' }).click();
  // const quotePageHeadline = page.getByLabel('We found you some options');
  // await expect(quotePageHeadline).toHaveText('We found you some options');
});
