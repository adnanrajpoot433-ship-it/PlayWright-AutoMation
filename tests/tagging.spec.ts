/*
test1-sanity
test2- sanity,regression
test3-regression

We can run test based on the tags
@ will use as a tag and we write in the title of the test,but we dont preefer thus 

2) {tag:"sanity"} >> we also use this method write with async and more used

3) for running the only for example sanity then we needs to write like this 

   Command>>>>> npx playwright test tagging.spec.ts --grep "@sanity"

   4) if we want to run only regression just change at command with "@regression"

   5) if i want to runs test which contain both regression and sanity then we use 

   command --->>> 

(?=.*@sanity)
(?=.*@regression) -->> this will use for check that tage is present or not

"(?=.*@sanity)(?=.*@regression)"--> this will now runs together and put with --grep


6) runs test belongs to either sanity or regression

| will use for this between them.

7) runs sanity test which are not belongsc to regression
--grep "@sanity" --grep-invert "@regression"








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