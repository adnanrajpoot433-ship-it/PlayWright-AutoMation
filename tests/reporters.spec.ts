import {test,expect} from "@playwright/test";


/* reporter using html for making different reports in html 
  this is benefited in CI/CD where we needs to see history, and the 
  syntax for this is below in the configuration under reports just make 

  reporter:[['html',{open:'always',outputfolder:'html-report'}]], 

  */

test.beforeEach('Launching app',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
})

test("Logotest",async({page})=>{

await expect(page.locator("img[alt='Tricemtis Demo Web Shop']")).toBeVisible();

});

test("Title Test",async({page})=>{

expect(await page.title()).toContain("Demo Web Shop");

});

test('search test',async({page})=>{

    await page.locator('#small-searchterms').fill("laptop");
    await page.locator("input[value='search']").click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop",{ignoreCase:true});



})
