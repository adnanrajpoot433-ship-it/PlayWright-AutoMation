/*
only
skip
fail
fixme
slow 
*/



import{test,expect} from "@playwright/test";
//only
//only use for running the specific test 
test("test1",async({page})=>{
await page.goto("https:/www.google.com");
await expect(page).toHaveTitle("Google");

});

test("test2",async({page})=>{
await page.goto("https:/www.google.com");
await expect(page).toHaveTitle("Google");


})

//skip

//skip is used for skipping the test 
//let supoose we have 10 test and i want to run only 9 then we can use
test.skip("test3",async({page})=>{
await page.goto("https:/www.google.com");
await expect(page).toHaveTitle("Google");


})

test("test4",async({page})=>{
await page.goto("https:/www.google.com");
await expect(page).toHaveTitle("Google");
})

//skip the test based on the condition 
test("test5",async({page,browserName})=>{
    test.skip(browserName==='firefox','this test skipped if browser is firefox')
await page.goto("https:/www.google.com");
await expect(page).toHaveTitle("Google");
})

//fail 
//use when we intentaionally wants to fail test 
test.fail("test6",async({page})=>{
await page.goto("https:/www.google.com");
await expect(page).toHaveTitle("Google");
})

//fixme

test("test7",async({page})=>{
await page.goto("https:/www.google.com");
await expect(page).toHaveTitle("Google");
})
