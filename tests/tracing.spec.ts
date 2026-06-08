 //3 ways to create trace files(.zip)
 //TRacing can be done thorugh these way 
 // using playwright config.ts
 // using command 
 // npx playwright test mytest.spec.ts--trace on
 
 
 //To view trace file ( 3 ways)
 //1) from html file--> click on trace.zip
 //2) through command --> npx playwright show-trace trace.zip
 
 
 
 
 import {test,expect} from "@playwright/test" 

 test.only("tracing test", async({page})=>{


 await page.goto('https://www.demoblaze.com/index.html');
 await page.getByRole('link', {name:'Log in'}).click();
 await page.locator('#loginusername').fill('pavanol');
 await page.locator('#loginpassword').fill('test@123');
 await page.getByRole('button',{name:'Log in'}).click();
 await expect(page.getByRole('link', {name: 'Log out'})).toBeVisible();
 await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');



 });