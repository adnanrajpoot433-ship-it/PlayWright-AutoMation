/* 
All locators in playwright by default work with element in shadow dom.
the exception are:
Locating by Xpath does not pierce shadow roots
*/


import{test,expect} from "@playwright/test";

test("Shadow dom", async({page})=>{

await page.goto("books-pwakit.appspot.com");

await page.locator("#input").fill("Playwright automation");

await page.keyboard.press("Enter");

await page.waitForTimeout(5000);

const booksfound=await page.locator("h2.title").all(); // return all the element in the form of array

console.log("Booms Found:",booksfound.length)

expect(booksfound.length).toBe(20);
})



test.only("Shadow dom2 ", async({page})=>{

await page.goto("https://shop.polymer-project.org/");

await page.locator("a[(aria-label=\"Men's Outerwear Shop Now\"]").click();

await page.waitForTimeout(5000);

const productsFound=await page.locator('div.title').all();

console.log("Number of products found :",productsFound.length);

expect(productsFound.length).toBe(16);


})