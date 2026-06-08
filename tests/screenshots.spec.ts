import {test,expect} from '@playwright/test'

test('screenshots demo', async({page})=>{


await page.goto("https://demowebshop.tricentis.com/");


// date.now()

const timestamp=Date.now();

//screenshot() use for taking the screenshot
await page.screenshot({path:'screenshot/'+'homepage'+timestamp+'.png'})

//full page screenshot
await page.screenshot({path:'screenshot/'+'fullpage'+timestamp+'.png',fullPage:true})

//screenshot for the particular element
//1/) forst locate the element using locator 
//2) save in variable and then find screen shot using screen shot
const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
await  logo.screenshot({path:'screenshot/'+'LogoScreenshot'+timestamp+'.png'})

 
//Screenshot of the particular section 
const FeaturedSection=page.locator("div[class$='product-grid home-page-product-grid']")
await FeaturedSection.screenshot({path:'screenshot/'+'LogoScreenshot'+timestamp+'.png'})
})