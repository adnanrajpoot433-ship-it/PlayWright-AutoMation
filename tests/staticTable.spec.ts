import {test,expect, Locator} from "@playwright/test"

test("Static web Table", async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const table: Locator=page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();


    //1 count number of rows in a table 
  
    const RowsinTable: Locator= table.locator("tr"); // return all the rows including header
     //await expect(RowsinTable).toHaveCount(7); //approach 1
 
       const rowsCount: number=await RowsinTable.count();
       console.log(rowsCount);
       expect(rowsCount).toBe(7); // approach 2

    //2. count number of headers/columns in table 

    const ColoumnIntable: Locator=RowsinTable.locator( "th");
    await expect(ColoumnIntable).toHaveCount (4); //approach1


    const ColoumnCount:number= await ColoumnIntable.count();
    console.log(ColoumnCount);
    expect(ColoumnCount).toBe(4); //approach 2

    //3. read all data from table e.g 2nd row


   const secondrowcells: Locator= RowsinTable.nth(2).locator("td");
   const SecondRowText:string[]=await secondrowcells.allInnerTexts();
   console.log(SecondRowText);

   await expect(secondrowcells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]); //assertion

   //4. read all data from the table (Excluding data)

 const allrowsData:Locator[] =await RowsinTable.all(); 
 for ( let row of allrowsData.slice(1)) // slice(1) will skip header
 {

   const cols =await row.locator('td').allInnerTexts();
   console.log(cols);

 }
//5. print book names where author is mukesh 

const mukeshBooks:string[]=[];

for (let row of allrowsData.slice(1))
{

   const cells =await row.locator("td").allInnerTexts();
   const author=cells[1];
   const book=cells[0];

   if (author==="Mukesh")
   {
      console.log(`${author} \t ${book}`)
      mukeshBooks.push(book);
   }
   

}
expect(mukeshBooks).toHaveLength(2) // Assertion

//  6) calculate the total price of the books 

let totalPrice:number=0;
for (let row of allrowsData.slice(1))
{

   const cells =await row.locator("td").allInnerTexts();
   const price= Number(cells[3]);
   
 totalPrice=totalPrice+  (price);
   

}
console.log("Total price is :", totalPrice);

expect(totalPrice).toBe(7100);


})

