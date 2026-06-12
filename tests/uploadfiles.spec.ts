import {test,expect} from "@playwright/test";

test ("Single file Upload", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/#");

//setinputfiles( ) use for uploading files 
// first we locate the button of choose file and then using setinputfiles () i needs to give path of file which i wants to upload
await page.locator("#singleFileInput").setInputFiles("uploads/Communications User Guide June 24.pdf");

await page.locator("button:has-text('Upload Single File')").click();

const msg=await page.locator("#singleFileStatus").textContent(); // i can also use inner text, but i use text content if thier is ny hidden part here 

expect(msg).toContain("Communications User Guide June 24.pdf");

await page.waitForTimeout(5000);
})



// Upload multiple files 
// we will use [] for uploading multiple files 
//here i dont add double file but i can so yeah if i upload files then i can assert so yeah
test.only("Multiple files Upload", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/#");

await page.locator("#singleFileInput").setInputFiles(["uploads/Communications User Guide June 24.pdf", "uploads/issue2.png"]);

await page.locator("button:has-text('Upload Multiple Files')").click();

const msg=await page.locator("#singleFileStatus").textContent(); // i can also use inner text, but i use text content if thier is ny hidden part here 

expect(msg).toContain("Communications User Guide June 24.pdf");

await page.waitForTimeout(5000);
})