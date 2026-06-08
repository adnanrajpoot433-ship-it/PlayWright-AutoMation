import {test, expect, Locator} from "@playwright/test" 

test("Comparing Methods",async({page}) =>{
      test.setTimeout(60000);


await page.goto("https://demowebshop.tricentis.com/")
    waitUntil: "domcontentloaded"

const ProductTitle=page.locator(".product-title");


//1) inner text Vs Text Content 

//console.log(await ProductTitle.nth(1).innerText());
//console.log(await ProductTitle.nth(1).textContent());



//using traditional for loop

//const count= await ProductTitle.count();

//for ( let i=0; i<count; i++)
    
//{

    
// const ProductName: string=(await ProductTitle.nth(i).innerText()) // Extracts Plain Text. Elememinats Whitespace and Line breaks

    //console.log(ProductName);

   //const productName: string|null= await ProductTitle.nth(i).textContent(); // Extracts text including hidden elements. includes Extra white space, line breaks, etc

 //console.log(productName?.trim()); // here i use trim for removing the extra things from the text content

//}

//2.) allinnerText() vs allTextContent()

//const productNames1:string[]=await ProductTitle.allInnerTexts();
//console.log("Products name captured by allinnerText", productNames1); //we get output in the form of string without lines or space


//const productNames2:string[]=await ProductTitle.allTextContents();
//console.log("Products name captured by allinnerText", productNames2);

//const trimmedArray: string[]= productNames2.map(text=>text.trim()); // here i use trim using map becaue string is array 
//console.log(trimmedArray);

//3. all >> converts Locators to >>>Locator [],without this we cant use for of loop
// returns array of locators

const ProductsLocators:Locator[]=await ProductTitle.all();
console.log(ProductsLocators);
//console.log(await ProductsLocators[1].innerText());

//same work with the for of loop 

for ( let value of ProductsLocators )
{

    console.log(await value.innerText());
}



});