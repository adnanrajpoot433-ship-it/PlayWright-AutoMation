import {test,expect,chromium} from "@playwright/test" 

test ("Handle tabs", async()=>{

const browser=await chromium.launch();
const context=await browser.newContext();

//Creating 1 Page
const parentPage=await context.newPage();

await parentPage.goto("https://testautomationpractice.blogspot.com/");

// whenever we click on button and its open new tab,page then we catcing that or working that 
// we needs to make an event for that first before clicking that button on which clicking the 
// new page, tab is opening and for that we use waitforEvent('page')
// we use promise.all here because we needs to executes both the statement at one time
// here [childPage] i use this bracket because childpage will give page,void so for just page i put this in []
const [childPage]=await Promise.all([context.waitForEvent('page'),await parentPage.locator("button:has-text('New Tab')").click()]);

// 2 statements should go paraelly for that i use promise.all
//context.waitForEvent('page'); // pending, fulfiled, rejected
//await parentPage.locator("button:has-text('New Tab')").click(); // opens new tab // new page/tab

// if we have only two tabs or pages then we should go with 2nd approach
//if multile pages then go with 1st approachusing contexts
// Approach 1: switch between pages and get titles (Using context)
 const pages=context.pages(); // this will return the number of pages in the form of array -->>context.pages ()

 console.log("Nuber of pages created", pages.length);

  console.log("Title of parents page:" ,await pages[0].title());

  console.log("Title of child page:" ,await pages[1].title());


  //Approach 2: direct( Alternate)

  console.log("Title of parents page:" ,await parentPage.title());

  console.log("Title of child page:" ,await childPage.title());


})
