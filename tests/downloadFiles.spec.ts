import {test,expect} from "@playwright/test";

import fs from 'fs';

test("Download text files", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

await page.locator("#inputText").fill("Welcome"); // filling text in the text box

await page.locator("#generateTxt").click();

// here both action will run at same time means when we click on downaload link at the same
// time the download will starts happen so we needs to put both in together
// we use promise.all for that

// start waiting for download before clicking
const [download]=await Promise.all([
    page.waitForEvent("download"),
    page.locator("#txtDownloadLink").click()])

    //for specify the location where to save the download file or custom path 

    const downaloadpath='downloads/testfile.txt'
    await download.saveAs(downaloadpath);

    //check if file exist in the path 

    const fileExist=fs.existsSync(downaloadpath) // return true if file exist,not if not exist

    expect(fileExist).toBeTruthy();
})



//DownLoad Pdf File 


test.only("Download pdf files", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

await page.locator("#inputText").fill("Welcome"); // filling text in the text box

await page.locator("#generatePdf").click();
// here both action will run at same time means when we click on downaload link at the same
// time the download will starts happen so we needs to put both in together
// we use promise.all for that

// start waiting for download before clicking
const [download]=await Promise.all([
    page.waitForEvent("download"),
    page.locator("#pdfDownloadLink").click()])

    //for specify the location where to save the download file or custom path 

    const downaloadpath='downloads/testfile.pdf'
    await download.saveAs(downaloadpath);

    //check if file exist in the path 

    const fileExist=fs.existsSync(downaloadpath) // return true if file exist,not if not exist

    expect(fileExist).toBeTruthy();
})