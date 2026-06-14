import { test, expect } from "@playwright/test";


//step1

//for executing some steps multiple time we use some methods and those
// are called hooks
//step2


//will execute only once before starting all the test

test.beforeAll("Beforeall", async()=>{
    console.log("this is before all")
})


//will execute only once after compliation of all the test
test.afterAll("afterall",async()=>{
    console.log("this is after all")
})


//this will runs before every tests
//this will runs multiple times nefore every test
  test.beforeEach("beforeach",async()=>{

    console.log("this is before each")
  })


  // this will runs after every test runs 
  // this will also runs multiiple times depend number of tests 
  test.afterEach("aftereach", async({})=>{

    console.log("this ia after each")
  })

   

  test("test 1", async () => {
    
    console.log("this is test1......")

  });

  test("test 2", async () => {
   
    console.log("this is test2......")
    
  });





  test("test 3", async () => {
    console.log("this is test3......")
  });

  test("test 4", async () => {
    console.log("this is test4......")
  });

