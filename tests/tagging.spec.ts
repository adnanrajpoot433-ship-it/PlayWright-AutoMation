/*
test1-sanity
test2- sanity,regression
test3-regression

We can run test based on the tags
@ will use as a tag and we write in the title of the test,but we dont preefer thus 

2) {tag:"sanity"} >> we also use this method write with async and more used

*/

import {test,expect} from "@playwright/test";

test("Check title of the home Page", {tag:"@sanity"},async({page})=>{

    await page.goto("https:/www/google.com");
    await expect(page).toHaveTitle('Google');

});

test("Check the recomonditions", {tag:"@regression"},async({page})=>{

    await page.goto("https:/www/google.com");
    await page.locator("text='store'").click();
    await expect(page).toHaveTitle('Google store for google mode device');

});