import {test,expect,Page,chromium} from "@playwright/test"


//Browser --> Context --> Pages 

//Browser---> chromium, firefox, Webkit

//Context--> we can create multiple context for multiple users/apps for the same browser
         // provide a wau to operte multiple independent browser sessions.


//page--->> New Tab, window, popup

test("Browser Context demo", async({})=>{

   const browser= await chromium.launch(); // Create browser
   const context=await browser.newContext(); // create context

// we can create multiple pages 
//Creating 2 pages
// we can also find out how many pages have been created using context a method used context.pages
//advantage of creating multiple pages is that we can work with multiple application parallely
    const page1=await context.newPage();
    const page2=await context.newPage();
    console.log("No of pages created:", context.pages().length);

  //using page1 for this advantage 
  await page1.goto("https://demowebshop.tricentis.com/")
  expect(page1).toHaveTitle("Demo Web Shop")

  await page2.goto ("https://www.demoblaze.com/index.html");
  expect(page2).toHaveTitle("STORE");

  await page1.waitForTimeout(5000);
  await page2.waitForTimeout (5000);

})