import {Page,Locator} from "@playwright/test";

// how to create the page object class 

export class LoginPage 
{

// define the variables  -- Private and ReadOnly 

 private readonly page:Page;
 private readonly loglink:Locator;
 private readonly userNameInput:Locator;
 private readonly passwordInput:Locator;
 private readonly LoginButton:Locator;

//constructor
constructor(page:Page) // here we get the page from the test as a parameter 
{

    this.page=page; // here we assining the page to the class variable page >> this is represneted class
    this.loglink=this.page.locator('#login2');
    this.userNameInput=this.page.locator("#loginusername");
    this.passwordInput=this.page.locator("#loginpassword");
    this.LoginButton=this.page.locator("button[onclick='logIn()']");
}


//actions methods 

async clickLoginLink():Promise<void>
{

    await this.loglink.click();

}

async enterUserName(username:string) :Promise <void>
{

await this.userNameInput.clear();
await this.userNameInput.fill(username);

}

async enterPassword(password:string) :Promise <void>
{

  await this.passwordInput.clear();
   await this.passwordInput.fill(password)
}

async clickOnLoginButton() :Promise <void>
{

    await this.LoginButton.click();
}

async perfomLogin(username:string,password:string)
{
    await this.clickLoginLink ();
    await this.enterUserName(username);
    await this.enterPassword(password)
    await this.clickOnLoginButton();
}

}