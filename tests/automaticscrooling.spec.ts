// most of the time, Playwright will scroll for you before doing any 
// therefore you do not need to scroll explicitly

import {test,expect} from "@playwright/test"

test("Scrolling to footer", async({page})=>{

await page.goto ("https://demowebshop.tricentis.com/");
//footer element automatically scrolled before doing any action

const footerText:string=await page.locator(".footer-disclaimer").innerText();

console.log("Footer text captured",footerText);


});


test("Scrolling inside dropdown", async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/#");

  await page.locator("#comboBox").click();

   const options= page.locator('#dropdown div:nth-child(100');
 console.log("Options captured from dropdown;", await options.innerText());
 await options.click();

});

// grabing the last value inside the table which is not visible
// we want to show here that in playwright scrolldown is automatically comes down 

 test.only("Scrolling inside the table", async({page})=>{

await page.goto("https://datatables.net/examples/basic_init/scroll_xy.html");

const name=await page.locator('tbody tr:nth-child(10) td:nth-child(2)').innerText();
console.log("Last name from 10th row & 2nd coloumn:", name);

const email= await page.locator('tbody tr:nth-child(10) td:nth-child(9)').innerText();
console.log("Email from 10th row and 9th coloumn:",email);

 })