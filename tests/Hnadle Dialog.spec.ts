// alert(), Confirm(), Prompt() Dialogs/jsalerts

//1) By default, dialogs are auto dismissed by Playwright, so you dont have to handle them
//2) However, you can register a dialog handler before the action triggers the dialog to either 
// dialog.accept() or dialog.dismiss() it.

import {test,expect,Locator} from "@playwright/test"

test("Simple Dialog", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");


// Register a dialog handler
page.on('dialog', (dialog)=> {
    
    console.log("Dialog Type is :", dialog.type()) // return type of dialog

    expect(dialog.type()).toBe ('alert');

    console.log("Dialog Text is :", dialog.message()) // return message from dialog


    expect(dialog.message()).toContain("I am an alert box!");

    dialog.accept()});

await page.locator("#alertBtn").click (); // this will opens dialog

await page.waitForTimeout (5000);



})



// Confirmation Dialog
test("Confirmation Dialog", async({page}) => {


    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', (dialog)=> {

        
        console.log("Alert type is :", dialog.type());  //return the type of dialog
        expect(dialog.type()).toBe('confirm');

        console.log(dialog.message())
       expect(dialog.message ()) .toContain("Press a button!");
        dialog.accept ();  //close dialog by accepting
       // dialog.dismiss(); // close dialog by dismissing
});

await page.locator("#confirmBtn").click(); // Opens Confirmation Dialogs

const text :string =await page.locator('#demo').innerText();
console.log("Output text is :", text);
expect(text).toBe("You pressed OK!");


});


//Register Dialog Handler
test.only("Prompt Dialog", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog) => {

        console.log("Dialog type is:", dialog.type()); // returm dialog type
        expect(dialog.type()).toBe("prompt");

        console.log("Dialog message is:", dialog.message()); // return dialog message
        expect(dialog.message()).toBe("Please enter your name:");

       expect( dialog.defaultValue()).toContain("Harry Potter"); // Checks default value of dialog box

        await dialog.accept("adnan bashir");
    });

    await page.locator('#promptBtn').click();

    const text1 = await page.locator("#demo").innerText();

    expect(text1).toBe("Hello adnan bashir! How are you today?");
});



