// open app >>>> before all()
//login
//      find products
//logout

//login
    //add products to cart
//logout
//close app




//if we makes the test in the group and hooks are outside the tests then
// we can also use those with the test inside the groups,but if we includes
// the hooks inside the test then those hooks will applicable for that group
// other tests outside that group will not applicable.
// so best pratics is that keeps hooks outside group

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
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator ('button[onclick="logIn()"]').click();
    await page.waitForTimeout(5000);

});


test.afterEach("Log out",async()=>{

 await page.locator("#logout2").click();

})


test("Find no of products",async()=>{

const Products=page.locator("#tbodyid .hrefch");
 const count=await Products.count(); //this will return the total products
 console.log("Number of products",count);
 await expect(Products).toHaveCount(9);

});

test("Add to products",async()=>{


    await page.locator("text='Samsung galaxy s6'").click();

    //Handle alert before click 
    page.once("dialog",async(dialog)=>{

        expect(dialog.message()).toContain("Product added");
        await dialog.accept();
    });

    await page.locator(('.btn.btn-success.btn-lg')).click();
})