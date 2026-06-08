import {test,expect} from "@playwright/test"

test("Autowaiting and force", async({page})=>{

 //setting timeout at the test level
test.setTimeout(50000); // 50secv
await page.goto("https://demowebshop.tricentis.com/")


//Assertion --- Auto wait works
await expect(page).toHaveURL ("https://demowebshop.tricentis.com/")
await expect (page.locator('text=Welcome to our store')).toBeVisible(); //{timeout:10000} we can put like this in assetion as well
 
  
//Actions-- Auto wait works 
await page.locator('#small-searchesterms').fill("laptop") //force Action
await page.locator('.button-1search-box-button').click(); // force action


});