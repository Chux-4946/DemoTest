import { test, expect } from '@playwright/test';

/* test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('heading', { name: '$360' }).click();
  await page.getByRole('link', { name: 'Nokia lumia' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
 
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Place Order' })).toBeVisible();  */



test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  /* await page.getByLabel('Country:').selectOption('uk');
  await expect(page.getByLabel('Country:')).toContainText('India');
  await expect(page.getByLabel('Country:')).toHaveValue('uk');
  await expect(page.getByLabel('Country:')).toHaveValue('uk');
  await expect(page.getByLabel('Country:')).toHaveValue('uk');
  await page.getByLabel('Colors:').selectOption('red');
  await page.getByLabel('Colors:').selectOption(['red', 'blue', 'green']); */

 /*    const options=await page.$$('#country option')
  for(const option of options){
      const value=await option.textContent()
      console.log('print value:', value)
  }   */
// await page.waitForSelector('#country', {timeout:5000});
   /* const options=await page.$$('#country option')
  for(const option of options)
    {
      let value=await option.textContent();
      if(value.includes('Brazil'))
        {
        await page.selectOption("#country",value);
        break;
      }
    }  */

   // await page.locator('#country').selectOption('Brazil');

   /* const content= await page.locator("#country").textContent() 
   console.log('print value:', content)
   await expect(content.includes('India')).toBeTruthy(); */
  
   /*await page.getByRole('row', { name: 'Smartwatch' }).getByRole('checkbox').check();
   
   await page.waitForTimeout(3000)
    await page.getByRole('row', { name: 'Wireless Earbuds' }).getByRole('checkbox').check();
   await page.waitForTimeout(3000)
   await page.getByRole('row', { name: 'Smartphone' }).getByRole('checkbox').check();
   
   await page.getByRole('row', { name: 'Laptop $19.99' }).getByRole('checkbox').check();
   await page.waitForTimeout(3000) */

   await page.locator('#datepicker').click();
   /* await page.getByTitle('Next').click();
   await page.getByRole('link', { name: '20' }).click();
  // await page.locator('#datepicker').click();
   await page.getByTitle('Prev').click(); */
  const dates=await page.$$("ui-state-default")
for(const date of dates)
    {
      const value=await date.textContent() 
     console.log('print dates:',value) ; 
    }
 
});


