/*

Test: create booking
Request Type: Post
Request Body: Static

*/

import{test,expect} from "@playwright/test";

test("Create Post Request using static body", async({request})=>{

//first nees to prepare request body 

const requestBody={

    "firstname" : "Jim",
    "lastname" : "Adnan bashir",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast",

    }

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
        "firstname": "Jim",
        "lastname": "Adnan bashir",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    });

    expect(booking.bookingdates).toMatchObject( {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    });

});

