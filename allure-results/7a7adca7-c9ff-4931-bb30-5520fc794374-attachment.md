# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTests\post-api-request.spec.ts >> Create Post Request using static body
- Location: tests\apiTests\post-api-request.spec.ts:11:5

# Error details

```
SyntaxError: Unexpected token 'I', "Internal S"... is not valid JSON
```

# Test source

```ts
  1  | /*
  2  | 
  3  | Test: create booking
  4  | Request Type: Post
  5  | Request Body: Static
  6  | 
  7  | */
  8  | 
  9  | import{test,expect} from "@playwright/test";
  10 | 
  11 | test("Create Post Request using static body", async({request})=>{
  12 | 
  13 | //first nees to prepare request body 
  14 | 
  15 | const requestBody={
  16 | 
  17 |     firstName:"jim",
  18 |     lastname: "Brown",
  19 |     totalPrice: 1000,
  20 |     depositedpaid: true,
  21 |     bookingDates: {
  22 | 
  23 |         checkin: "2025-07-01",
  24 |         checkout: " 2025-07-05",
  25 |     },
  26 |     addintionalNeeds: "super bowls",
  27 | 
  28 |     }
  29 | 
  30 |     //Send post request
  31 | 
  32 |     //here we needs to provide two parameter one is url and 2nd is body which we create above
  33 |     
  34 |     const response=await request.post("https://restful-booker.herokuapp.com/booking",{data:requestBody});
  35 | 
  36 |         // and here we got respone and from response we can get multiple things
  37 |         //let suppose i want to the body from the response then this is method below
  38 |         
> 39 |        const responseBody= await response.json(); // Extracted the Response
     |                            ^ SyntaxError: Unexpected token 'I', "Internal S"... is not valid JSON
  40 | 
  41 |        console.log(responseBody);
  42 | 
  43 |        //validate status
  44 |        expect(response.ok()).toBeTruthy();
  45 |        expect(response.status()).toBe(200);
  46 | 
  47 |        //validation respone body attributes
  48 |        // if we want to verify property from the json resposne body 
  49 | 
  50 |        expect(responseBody).toHaveProperty("bookingid")
  51 |        expect(responseBody).toHaveProperty("booking")
  52 |        expect(responseBody).toHaveProperty("additionalneeds");
  53 | 
  54 |        //we can also validate structre or internal objects
  55 |         //here i makes variable booking from the repsonse and thier object 
  56 |         //we are verifiyng
  57 |        
  58 |        const booking=responseBody.booking;
  59 |        expect(booking).toMatchObject({
  60 |         "firstname": "Jim",
  61 |         "lastname": "Adnan bashir",
  62 |         "totalprice": 111,
  63 |         "depositpaid": true,
  64 |         "bookingdates": {
  65 |             "checkin": "2018-01-01",
  66 |             "checkout": "2019-01-01"
  67 |         },
  68 |         "additionalneeds": "Breakfast"
  69 |     });
  70 | 
  71 |     expect(booking.bookingdates).toMatchObject( {
  72 |         "checkin" : "2018-01-01",
  73 |         "checkout" : "2019-01-01"
  74 |     });
  75 | 
  76 | });
  77 | 
  78 | 
```