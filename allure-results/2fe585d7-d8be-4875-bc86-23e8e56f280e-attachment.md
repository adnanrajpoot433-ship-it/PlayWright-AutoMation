# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTests\post-api-request.spec.ts >> Create Post Request using static body
- Location: tests\apiTests\post-api-request.spec.ts:11:5

# Error details

```
Error: expect(received).toHaveProperty(path)

Matcher error: received value must not be null nor undefined

Received has value: undefined
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
  17 |     "firstname" : "Jim",
  18 |     "lastname" : "Adnan bashir",
  19 |     "totalprice" : 111,
  20 |     "depositpaid" : true,
  21 |     "bookingdates" : {
  22 |         "checkin" : "2018-01-01",
  23 |         "checkout" : "2019-01-01"
  24 |     },
  25 |     "additionalneeds" : "Breakfast",
  26 | 
  27 |     }
  28 | 
  29 |     //Send post request
  30 | 
  31 |     //here we needs to provide two parameter one is url and 2nd is body which we create above
  32 |     
  33 |     const response=await request.post("/booking",{data:requestBody});
  34 | 
  35 |         // and here we got respone and from response we can get multiple things
  36 |         //let suppose i want to the body from the response then this is method below
  37 |         
  38 |        const responseBody= await response.json(); // Extracted the Response
  39 | 
  40 |        console.log(responseBody);
  41 | 
  42 |        //validate status
  43 |        expect(response.ok()).toBeTruthy();
  44 |        expect(response.status()).toBe(200);
  45 | 
  46 |        //validation respone body attributes
  47 |        // if we want to verify property from the json resposne body 
  48 | 
  49 |        expect(responseBody).toHaveProperty("bookingid")
  50 |        expect(responseBody).toHaveProperty("booking")
> 51 |        expect(responseBody.additionalneeds).toHaveProperty("additionalneeds");
     |                                             ^ Error: expect(received).toHaveProperty(path)
  52 | 
  53 |        //we can also validate structre or internal objects
  54 |         //here i makes variable booking from the repsonse and thier object 
  55 |         //we are verifiyng
  56 |        
  57 |        const booking=responseBody.booking;
  58 |        expect(booking).toMatchObject({
  59 |         "firstname": "Jim",
  60 |         "lastname": "Adnan bashir",
  61 |         "totalprice": 111,
  62 |         "depositpaid": true,
  63 |         "bookingdates": {
  64 |             "checkin": "2018-01-01",
  65 |             "checkout": "2019-01-01"
  66 |         },
  67 |         "additionalneeds": "Breakfast"
  68 |     });
  69 | 
  70 |     expect(booking.bookingdates).toMatchObject( {
  71 |         "checkin" : "2018-01-01",
  72 |         "checkout" : "2019-01-01"
  73 |     });
  74 | 
  75 | });
  76 | 
  77 | 
```