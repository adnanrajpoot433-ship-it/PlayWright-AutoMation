// Kyeboard methods:
//inserttext
//down
//press
//type
//up
// await page.keyboard

import{test,expect} from "@playwright/test";

test("KeyBoard actions",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/#");

 const input1=page.locator("#input1");


//1) focus on input element 
await input1.focus(); // we can also use click here 
//await input1.click();



//2) provide the text in input1
await page.keyboard.insertText("welcome"); // page.keyboard.inserttext use for putting the text

//3) Ctrl+a>> which select the text from input 1
await page.keyboard.down("Control");
await page.keyboard.press("A");  // press use for the single Text element 
await page.keyboard.up("Control");

//4) Ctrl+c.. which will copy the text from input 1
await page.keyboard.down("Control");
await page.keyboard.press('C');  // press use for the single Text element 
await page.keyboard.up("Control");

//5) press Tab key 2 times 
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

//6) Ctrl+v>> this will paste the text in input 2 
await page.keyboard.down("Control");
await page.keyboard.press('C');  // press use for the single Text element 
await page.keyboard.up("Control");

//7) press tab 2 times and will focus 3rd input 
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

//8) Ctrl+v .. paste the text in input 3
await page.keyboard.down("Control");
await page.keyboard.press('V');  // press use for the single Text element 
await page.keyboard.up("Control");

await page.waitForTimeout(5000);

})




test.only("KeyBoard actions - Simple way",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/#");

 const input1=page.locator("#input1");


//1) focus on input element 
await input1.focus(); // we can also use click here 
//await input1.click();



//2) provide the text in input1
await page.keyboard.insertText("welcome"); // page.keyboard.inserttext use for putting the text

//3) Ctrl+a>> which select the text from input 1
await page.keyboard.press("Control+A");

//4) Ctrl+c.. which will copy the text from input 1
await page.keyboard.press("Control+C");

//5) press Tab key 2 times 
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

//6) Ctrl+v>> this will paste the text in input 2 
await page.keyboard.press("Control+V");

//7) press tab 2 times and will focus 3rd input 
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

//8) Ctrl+v .. paste the text in input 3
await page.keyboard.press("Control+V");
await page.waitForTimeout(5000);

})