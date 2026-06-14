import { test, expect } from "@playwright/test";

// we use describe for making the group
// we use grep command for running test in thr group 
// command for this >>>npx playwright test grouping.spec.ts --grep Group1
//we can put n number f tests in group

//1) for running the soecifpic group of test we use command --grep group name
test.describe("group1", async () => {

  test("test 1", async () => {
    console.log("this is test1......")
  });

  test("test 2", async () => {
    console.log("this is test2......")
  });

}); // ← group1 closed here



//this is group 2
test.describe("group2", async () => {

  test("test 3", async () => {
    console.log("this is test3......")
  });

  test("test 4", async () => {
    console.log("this is test4......")
  });

});