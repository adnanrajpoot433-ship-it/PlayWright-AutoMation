import {test,expect} from "@playwright/test";

import { LoginPage } from "../pages/LoginPages";

import { HomePage } from "../pages/HomePage";

import { CartPage } from "../pages/CartPage";

test("user can Login, add a product to the cart", async({page})=>{


await page.goto("https://www.demoblaze.com/index.html");

const loginPage= new LoginPage(page)

//Login Page

/*
loginPage.clickLoginLink();
loginPage.enterUserName("pavanol");
loginPage.enterPassword("test@123");
loginPage.clickOnLoginButton();

*/

//another method
await loginPage.perfomLogin("pavanol", "test@123");


//HomePage

const homePage= new HomePage (page);

await homePage.addProductToCart("Samsung galaxy s6");
await homePage.gotoCart();


//Cart Page

const cartpage=new CartPage(page);

const isProductExist=await cartpage.checkProductInCart("Samsung galaxy s6");

expect(isProductExist).toBe(true);

})
