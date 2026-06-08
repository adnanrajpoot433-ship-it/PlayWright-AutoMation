import {test,expect,Page} from "@playwright/test"

test("Handle popups",async({browser})=>{


const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://testautomationpractice.blogspot.com/");


// How to handle Multiple PopUp
// for catching the popup first we needs to triger the event 

await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()])
const allPopupWindows=context.pages();
console.log("Number of pages/Windows",allPopupWindows.length); // return array of pages 

//page.waitForEvent("popup");
//await page.locator("PopUp").click();


//can we acess individual pages by using index ?
//Yes we can as it is array.

console.log("Url of Main page:",allPopupWindows[0].url());

console.log("Url of child page:",allPopupWindows[1].url());

//i want to close a specific popup or i want to close all popup for that we will use loops

for(const pw of allPopupWindows)
{

  const title= await pw.title();
  if(title.includes('Playwright'))
    
    {
await pw.locator('.getStarted__Sjon').click();
//perfome any other actions here
await pw.close(); // this will close playwright popup window 
  }

}

})