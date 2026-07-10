import {test,expect} from "@playwright/test";

test("web table", async({page})=>{

 await page.goto("https://testautomationpractice.blogspot.com/");

 const Table= page.locator("#HTML8");

 // find total number of cololumns 

 const coloumns=Table.locator('thead tr th');
 console.log("Number of coolumns", await coloumns.count());

  const rows=Table.locator('tbody tr');
  console.log("Number of rows",await rows.count());
 



})