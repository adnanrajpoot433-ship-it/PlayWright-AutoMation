import { test, expect, Locator } from "@playwright/test";

test("Read all data from all the table pages", async ({ page }) => {

   await page.goto("https://datatables.net/");

   let hasMorePages = true;

   while (hasMorePages) {

      const rows = await page.locator("#example tbody tr").all();

      for (let row of rows) {
         console.log(await row.innerText());
      }

      await page.waitForTimeout(2000);

      const nextButton: Locator = page.locator("button[aria-label='Next']");

      const isDisabled = await nextButton.getAttribute("class");

      if (isDisabled?.includes("disabled")) {
         hasMorePages = false;
      } else {
         await nextButton.click();
      }

      
   }

   }); 



   test("filter the rows and check the row count", async({page})=>
   {
     
    await page.goto("https://datatables.net/");
     
     const Dropdown:Locator= page.locator("#dt-length-0");
     await Dropdown.selectOption ({value:'25'});

 const rows= await page.locator("#example tbody tr").all();

  expect(rows.length).toBe(25);

});





 test.only("search for specific data in a table ", async({page})=>
   {
     
    await page.goto("https://datatables.net/");
     
     const SearchBox:Locator= page.locator("#dt-search-0");
     await SearchBox.fill ("Quinn Flynn");

 const rows= await page.locator("#example tbody tr").all();
 
 if(rows.length>=1)
 {
   let matchfound=false;
    for(let row of rows)
    {
       const text =await row.innerText();
       if(text.includes("Quinn Flynn"))
       {
        console.log("Record found");
        matchfound=true;
        break;
        
       }
    }
    expect(matchfound).toBeTruthy();

 }
else{
    console.log("No rows found with search Text")
}
  
});







