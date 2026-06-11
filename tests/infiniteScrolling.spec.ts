//infinite scrolling cant handle by Playwright so it is handle by Logic

import{test,expect} from "@playwright/test";

test("Infinite scrolling", async({page})=>{


test.slow(); // set timeout for a single test easy way to triple the default timeout
await page.goto("https://www.booksbykilo.in/new-books");

// for scorlling we use javascript statement 
// window.scrollTo(0,document.body.scrollHeight) (java script statement )

let previousHeight=0;
while(true){

    // will scroll down the page
    await page.evaluate(() =>{
        window.scrollTo(0,document.body.scrollHeight);



    })
   
 const currentHeight=await page.evaluate (()=>
    {
        
       
        //capture the current height of the page
       return document.body.scrollHeight;

    })

    console.log("Previous height", previousHeight);
    console.log("Current height", currentHeight);

    if(currentHeight===previousHeight){

        break;
    }

    previousHeight=currentHeight;
    
}

console.log("Reached end of the Page   :")
  
})