import { test, expect } from "@playwright/test";


//step1


//step2

test.beforeAll("Beforeall", async()=>{
    console.log("this is before all")
})

test.afterAll("afterall",async()=>{
    console.log("this is after all")
})

  test.beforeEach("beforeach",async()=>{

    console.log("this is before each")
  })

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

