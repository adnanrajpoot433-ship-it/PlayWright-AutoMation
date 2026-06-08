import {test,expect,chromium} from "@playwright/test" 

test ("Handle tabs", async()=>{

const browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage();




})