// open app >>>> before all()
//login
// find products
//logout

//login
    //add products to cart
//logout
//close app

import {test,expect,Page} from "@playwright/test"

let page :Page;
test.beforeAll("Open App",async({browser})=>{

    page=await browser.newPage();
    await page.goto("https://www.demoblaze.com/")
})

test.afterAll("closing app", async()=>{

    await page.close();
});

test.beforeEach("Log in", async()=>{

    await page.locator("#login2").click();
    await page.locator("loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");

    

})