import{test,expect} from "@playwright/test";
import { request } from "node:http";

test("get booking details by id",async({request})=>{

const bookingid=2949; // we can pass this as path parameter

//sending the get request along with the path parameter
const response=await request.get(`/booking/${bookingid}`);

//parse the response and print 
const responseBody=await response.json();
console.log(responseBody);

//Add assertions

expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);

})


test.only("get booking details by Name-query params",async({request})=>{

    //first we needs to pass the query parms here in const 
    // then we declare them in the request

        const firstname="Jim"; // we can pass this as query  parameter
        const lastname="Adnan bashir";
//sending the get request along with the query parameter
const response=await request.get("/booking/",{params:{firstname,lastname}});

//parse the response and print 
const responseBody=await response.json();
console.log(responseBody);

//Add assertions

expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);

//check response should not be empty 

expect(responseBody.length).toBeGreaterThan(0);

for(const item of responseBody)
{

expect(item).toHaveProperty('bookingid');
expect(typeof item.bookingid).toBe("number")
expect(item.bookingid).toBeGreaterThan(0);


}


})