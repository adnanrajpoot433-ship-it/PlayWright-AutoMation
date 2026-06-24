/* 
playwright can be used to test your application for many types of accessibility issues.

Examples: 
Missing or improper ALT test for images 
poor colour contrast
missing form labels 
keyboard navigation issues 

Every website should follow wacg gudilines

install @axe-core/playwright:
    npm install @axe-core/playwright
*/


import {test,expect} from "@playwright/test";

import AxeBuilder from "@axe-core/playwright";
import { json } from "node:stream/consumers";

test("Acessibility test", async({page},testinfo)=>{

await page.goto("https://demowebshop.tricentis.com/");

// checking that web is following the accesbility or not 

//1) scanning and detecting complete page and the verify all types of WCAG violations

 // will scan the page and analyze all the issue and return the json format
 
 const accesbilityScanResult=await new AxeBuilder({page}).analyze(); // analyze will find all the violations

 console.log("Number of violations:",accesbilityScanResult.violations.length);

 expect(accesbilityScanResult.violations).toEqual([]) ;// violations will collect the violations from the result
  
 expect(accesbilityScanResult.violations.length).toEqual(0);



 //verifying the specific type of violations
 //2) Scanning for few WCAG violations with tags 

 const accesbilityScanResult=await new AxeBuilder({page}).withTags(["wcag2a","wcag2aa","wcag21a","wcag21aa"]).analyze();


 // for devolper showing the results
 await testinfo.attach("accessibility results", {
                                  body:JSON.stringify(accesbilityScanResult,null,2),
                                  contentType: 'application/json'
});

  console.log("Number of violations:",accesbilityScanResult.violations.length);

  expect(accesbilityScanResult.violations.length).toEqual(0);

})