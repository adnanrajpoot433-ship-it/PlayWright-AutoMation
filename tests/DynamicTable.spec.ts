import {test, expect,Locator} from "@playwright/test";

test("verify Chrome Cpu Load in Dynamic Table", async({page})=> 

{

  await  page.goto("https://practice.expandtesting.com/dynamic-table");

  const table :Locator =page.locator("table.table.table-striped tbody");
  await expect(table).toBeVisible(); 

  // select all the rows, then find number of rows 

  const rows:Locator[]= await table.locator("tr").all();
  console.log("number of rows in a table",rows.length);
  expect(rows.length).toBe(4) // assertion

  //Step 1: for chrome process get value of cpu Load
  // read each row for check chrome process 
 
 let cpuLoad="";
  for(const row of rows)
  {
      const processName:string= await row.locator("td").nth(0).innerText();

      if(processName==="Chrome")
      {

       
        //const cpuLoad: string =await  row.locator('td:has-Text("%")').innerText(); // one way to find out 

     cpuLoad=await  row.locator("td",{hasText:'%'}).innerText(); // also one way to find out (this is Playwright Syntax)
         
    console.log("Cpu Load of chrome", cpuLoad);
    break;

      }

  } 


  //Step2: Compare it with the value in the yellow label 


 let yellowBoxText: String=await page.locator("#chrome-cpu").innerText();

 console.log("Chrome cpu Load from Yellow Box",yellowBoxText); 

 if(yellowBoxText.includes(cpuLoad))
 {

  console.log("cpu load of chrome is equal")
 }
 else
{

console.log("Cpu load of chrome is not equal")
}

expect(yellowBoxText).toContain(cpuLoad);

})