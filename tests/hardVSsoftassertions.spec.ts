import {test,expect} from "@playwright/test"

test("Autowaiting and force", async({page})=>{

await page.goto("https://demowebshop.tricentis.com/")


//Hard assertions 
//in hard assertion if even one got failed then rest of the assertion will faield
await expect(page).toHaveTitle("Demo Web Shop"); // Demo Web Shop2
await expect(page).toHaveURL('https://demowebshop.tricentis.com/');

const logo =await page.locator("img[alt='Tricentis Demo Web Shop']");
await expect(logo).toBeVisible();



//Soft Assertion
//the assertion which failed is failed rest will executes
await expect.soft(page).toHaveTitle("Demo Web Shop"); // Demo Web Shop2
await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');

 const logo1 =await page.locator("img[alt='Tricentis Demo Web Shop']");
await expect.soft(logo1).toBeVisible();

await page.waitForTimeout(5000);

await page.waitForTimeout(5000);





});