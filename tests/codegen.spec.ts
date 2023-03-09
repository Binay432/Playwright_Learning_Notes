//codegen also called a Test Generator can be used to test,record and generate test scripts 
//2 windows is open >>>browser window to interacts with the website >>playwright inspector window to record test 
//below is the code paste from codegen inspector using code >>npx playwright codegen  

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test4.keela.co/');
  await page.getByLabel('Email').fill('binay.sah@keela.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('asd');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Binay Filter Test ' }).click();
  await page.getByRole('link', { name: ' Contacts' }).click();
  await page.frameLocator('iframe[name="kitIframe-sPcX988fnkfojp9Z7"]').getByRole('button', { name: 'Add Contact' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('binay');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('sah');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('binay.sah@kit.com');
  await page.getByRole('combobox', { name: 'Email Subscription Status' }).selectOption('Opted In');
  await page.getByRole('button', { name: 'Save' }).click();
});