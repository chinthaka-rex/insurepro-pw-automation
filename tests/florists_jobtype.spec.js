import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://app.qa.insurepro.com/");
  //Landing page
  await page.getByRole("button", { name: "Get a Quote" }).click();
  //Why are you looking for insurance page
  await page.getByText("I need it for my business").click();
  await page.getByRole("button", { name: "Continue" }).click();
  //Features page
  await page.getByRole("button", { name: "Mobile App" }).click();
  await page.getByRole("button", { name: "Cancel Anytime" }).click();
  await page.getByRole("button", { name: "VIEW ALL FEATURES" }).click();
  await page.getByRole("button", { name: "Phone Support" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  //General Information
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
});

test("Verify the rate page appearance for the Florist job type", async ({page,}) => {
  //What is your profession page
  await page.getByLabel("Business Type").click();
  await page.getByLabel("Business Type").type("florists");
  await page.getByRole("button", { name: "Florists" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  //Coverage Type page
  await page.getByRole("button", { name: "Coverage Type ▾" }).click();
  await page.getByRole('option', { name: 'General Liability' }).locator('label').click();
  await page.getByRole("button", { name: "Coverage Type ▾" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  //Business Information page
  await page.getByRole('textbox', { name: 'Founding Year of Business' }).click();
  await page.getByRole('textbox', { name: 'Founding Year of Business' }).fill('2000');
  await page.getByRole('button', { name: 'Legal Entity Type' }).click();
  await page.getByText('Sole Proprietorship').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //Business Operations page
  await page.getByRole('textbox', { name: 'Estimated gross revenue' }).type('5000');
  await page.getByRole('textbox', { name: 'Business owner(s) only What is your estimated payroll for the next 12 months?' }).type('2000');
  await page.getByRole('textbox', { name: '1099 contractors What is your estimated payroll for the next 12 months?' }).type('1000');
  const bizOprPgConBtn = page.getByRole('button', { name: 'CONTINUE' });
  await expect(bizOprPgConBtn).toHaveText('chevron-right', {timeout: 5000})
  await page.getByRole('button', { name: 'Continue' }).click();
  //Additional Information page
  const startPgTitle = page.locator('#form > div')
  await expect(startPgTitle).toHaveText('Additional Information', {timeout: 10000})
  await page.getByLabel('Policy start date').type(todayIs());
  await page.getByRole('button', { name: 'Continue' }).click();
  //Coterie
  const coteriePgTitle = page.locator('#form > div')
  await expect(coteriePgTitle).toHaveText('Additional Questions', {timeout: 10000})
  await page.getByRole('button', { name: 'Continue' }).click();
  //Hiscox
  await page.getByLabel('Approximately when did your business begin?').type('01052022');
  await page.getByRole('group', { name: 'Is your business operated out of your home?' }).getByText('No').click();
  await page.getByRole('group', { name: 'Does your business provide any of the following operations, goods, or services?' }).getByText('No').click();
  await page.getByRole('button', { name: 'Your business does not conduct any of the following activities: Automotive repair or sales Food service/restaurant operations Medical services' }).click();
  await page.getByText('Agree').nth(2).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //Liberty Mutual
  await page.getByRole('group', { name: 'Have there been losses for the lines of business submitted?' }).getByText('No').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //Nationwide
  await page.getByRole('group', { name: 'In the past three years, have you had any business insurance cancelled or non-renewed by your insurance company, other than for non-payment of premium?' }).locator('label').filter({ hasText: 'No' }).locator('span').click();
  await page.getByRole('group', { name: 'Has your business operated without insurance for 6 months or more since the business started?' }).getByText('No').click();
  await page.getByRole('button', { name: 'How long has your business had General Liability insurance?' }).click();
  await page.getByText('0 years').click();
  await page.getByRole('group', { name: 'Does your business require certificates of insurance from sub-contractors?' }).getByText('No').click();
  await page.getByRole('group', { name: 'Does your business require all sub-contractors to carry liability limits equal to yours?' }).getByText('No').click();
  await page.getByRole('group', { name: 'Does your business require written contracts with all sub-contractors?' }).getByText('No').click();
 
  // await page.getByRole('group', { name: 'In the past three years, have you had any business insurance cancelled' }).getByText('No').click();
  // await page.getByRole('group', { name: 'Has your business operated without insurance for 6 months or more since the business started?' }).getByText('No').click();
  // await page.getByRole('button', { name: 'How long has your business had General Liability insurance?' }).click();
  // await page.getByRole("listbox", { name: "How long has your business had General Liability insurance?" }).getByText("0 years").click();
  // await page.getByRole('group', { name: 'Does your business require certificates of insurance from sub-contractors?' }).getByText('No').click();
  // await page.getByRole('group', { name: 'Does your business require all sub-contractors to carry liability limits equal to yours?' }).getByText('No').click();
  // await page.getByRole('group', { name: 'Does your business require written contracts with all sub-contractors?' }).getByText('No').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //Quote page
  const quotePageHeadline = page.getByLabel('We found you some options');
  await expect(quotePageHeadline).toHaveText('We found you some options');
});

//Functions
function todayIs() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('');
}
