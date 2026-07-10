/*

Test: create booking
Request Type: Post
Request Body: json file

*/

import{test,expect} from "@playwright/test";

import fs from 'fs';
import { json } from "stream/consumers";

test("Create Post Request using json file body", async({request})=>{

//read data from json file (request body)

const JsonFile=".github/testData/post-request-body.json";
const requestBody=JSON.parse(fs.readFileSync(JsonFile,'utf-8'));


    //Send post request

    //here we needs to provide two parameter one is url and 2nd is body which we create above
    
    const response=await request.post("/booking",{data:requestBody});

        // and here we got respone and from response we can get multiple things
        //let suppose i want to the body from the response then this is method below
        
       const responseBody= await response.json(); // Extracted the Response

       console.log(responseBody);

       //validate status
       expect(response.ok()).toBeTruthy();
       expect(response.status()).toBe(200);

       //validation respone body attributes
       // if we want to verify property from the json resposne body 

       expect(responseBody).toHaveProperty("bookingid")
       expect(responseBody).toHaveProperty("booking")
       expect(responseBody).toHaveProperty("booking.additionalneeds");

       //we can also validate structre or internal objects
        //here i makes variable booking from the repsonse and thier object 
        //we are verifiyng
       
       const booking=responseBody.booking;
       expect(booking).toMatchObject({
        "firstname": requestBody.firstname,
        "lastname": requestBody.lastname,
        "totalprice": requestBody.totalprice,
        "depositpaid": requestBody.depositpaid,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": requestBody.additionalneeds
    });

    //validate booking dated (nested json object)
    expect(booking.bookingdates).toMatchObject( {
        "checkin" : requestBody.bookingdates.checkin,
        "checkout" : requestBody.bookingdates.checkout
    });

});

