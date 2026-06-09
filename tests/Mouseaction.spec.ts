import {test,expect} from "@playwright/test";

test("Mouse hover",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const pointme=page.locator('.dropbtn');

await pointme.hover();

const laptops=page.locator('.dropdown-content a:nth-child(1)')

await laptops.hover();
await page.waitForTimeout(5000);
})

//Right click action using mouse

test("Right Click", async({page})=>{


    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    const button=page.locator(".context-menu-one");
    await button.click({button:'right'}); //this will perfome the right click action

    await page.waitForTimeout(5000);
})

//Double click actions using mouse 

test("Double Click", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

   const dbButton= page.locator("button[ondblclick='myFunction1()']")

  await dbButton.dblclick(); // dblclick use for double click 
 
   const fieldText=page.locator("#field2");

    await expect(fieldText).toHaveValue("Hello World!");

 
     await page.waitForTimeout(5000);
})


//Drag and Drop mouse action 

test.only("Drag and drop action", async({page})=>{

    await page.goto('https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE');

   const source= page.locator("#box6");
   const target= page.locator("#box106");

   //APPROACH 1: mouse hover and drag manually

  await source.hover();
  await page.mouse.down();  // for mouse down we needs to write this 

   await target.hover();
   await page.mouse.up();

   //Approach 2: mouse hover and drag manualy

    const washington=page.locator("#box3")

    const usa=page.locator("#box103");

    await washington.dragTo(usa); // dragto() alone will perfome drop action ( source element . to target element )

   await page.waitForTimeout (5000);






})
