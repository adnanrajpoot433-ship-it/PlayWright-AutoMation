import { test, expect, Locator, Page } from "@playwright/test";

async function selectDate(targetYear: string, targetMonth: string, targetDate: string, page: Page, isFuture: boolean)
{

while(true)
{

const currentMonth = await page.locator(".ui-datepicker-month").textContent();
const currentYear = await page.locator(".ui-datepicker-year").textContent();

if(currentMonth === targetMonth && currentYear === targetYear)
{
    break;
}

if(isFuture)
{
 //Future
 await page.locator(".ui-datepicker-next").click();
}

else {
    //past
 await page.locator(".ui-datepicker-prev").click();

}


}

const AllDates = await page.locator(".ui-datepicker-calendar td").all(); // here converting date locator into array so that i can use for loop all() will change this into array

   for( let dt of AllDates)
   {

    const DateText = await dt.innerText();

    if(DateText === targetDate)
    {
   
        await dt.click();
        break;

    }
   }

} // <-- ONLY FIX: missing closing brace added here




test("verify jquery datePicker", async({page})=>
{

await page.goto("https://testautomationpractice.blogspot.com/");
   
 const DatePicker: Locator = page.locator("#datepicker");

await expect(DatePicker).toBeVisible();

// Approach 1 :using fill () method 
//await (DatePicker).fill("05/20/2026");   // mm/dd/yyyy


// Approach 2: using date Picker

await DatePicker.click(); // for clicking the date picker

// future target date
const month = "June";
const date = "15";
const year = "2026"

// past target date
//const month="June";
//const date="15";
//const year="2026"

await selectDate(year, month, date, page, true) //futureDate >>true  and for PastDate it should be False

const expectedDate = "06/15/2026"; //mm/dd/yyyy
await expect(DatePicker).toHaveValue(expectedDate);
await page.waitForTimeout(5000);
 
});