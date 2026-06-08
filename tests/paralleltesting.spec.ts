import { test } from "@playwright/test";

//test.describe.configure({ mode: 'serial' }); // this command will use to do serial testing at test level
// we can also make the setting at the configure setting by making fullyparallel: false

//test.describe.configure({ mode: 'parallel' }); // this command will use to do parallel runing at the test file level
// we can also make the setting at the configure setting by making fullyparallel:true


// we can also adjust the worker from the configure file for making the paallel by
// setting the value of the worker (which ever we want)

//if i want to make test execute in one browser as a parallel and in the other it is as 
// serial then we can do in config file in project by setting ( fullyParallel:true,)

test.describe("group1", () => {

    test("Test1", async ({ page }) => {
        console.log("This is test 1");
    });

    test("Test2", async ({ page }) => {
        console.log("This is test 2");
    });

    test("Test3", async ({ page }) => {
        console.log("This is test 3");
    });

    test("Test4", async ({ page }) => {
        console.log("This is test 4");
    });

    test("Test5", async ({ page }) => {
        console.log("This is test 5");
    });

});