/*

pre-requisite:

   data:json file
   create token

1) Create a new booking (post) --->> bookingid
2) Update booking (Put) /// for updating we needs required

*/

import { test, expect } from "@playwright/test";
import fs from "fs";

//utility function return json file data

function readJson(filepath: string) {
    return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

test("Update Boooking", async ({ request }) => {

    //1)creating a booking (Post) ---> retrun the bookingid

    const requestBody = readJson(".github/testData/post-request-body.json");

    const createResponse = await request.post("/booking", {
        data: requestBody
    });

    expect(createResponse.ok()).toBeTruthy();

    // for capturing the booking id from response

    const responseBody = await createResponse.json(); // return the response body

    const bookingid = responseBody.bookingid; //extracting bookingid from the response body

    console.log("booking ID ====>>>", bookingid);

    //2) update booking (put)  //required token

    //token creation

    const tokenRequestBody = readJson(".github/testData/token-request-body.json");

    const tokenresponse = await request.post("/auth", {
        data: tokenRequestBody
    });

    expect(tokenresponse.ok()).toBeTruthy();

    const tokenresponseBody = await tokenresponse.json(); //return the response body

    const token = tokenresponseBody.token;

    console.log("token ====>>>", token);

    //Sending update (put)

    // now we needs to pass updated id and token
    // here for sending the token which in this api will pass in the header
    // so ever we needs to put data in the header we use header property

    const updaterequestBody = readJson(".github/testData/put-request-body.json");

    const updateresponse = await request.put(`/booking/${bookingid}`, {
        headers: {
            Cookie: `token=${token}`
        },
        data: updaterequestBody
    });

});