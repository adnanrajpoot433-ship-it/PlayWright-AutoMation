// An iframe is an html element that allows you to embed another html docoument within hte current docoument.
//iframes are comonnly, used to embed external content such as videos,maps,or other web pages into a web page without affecting the parent docoument.

import{test, expect} from "@playwright/test" 

test("Frames demo", async ({page}) =>{

    await page.goto("https://ui.vision/demo/webtest/frames/");


//total number of frames present on the page

const frames=page.frames();
console.log("Number of frames",frames.length);




//----Approach 1: using frame itself  (Page.frame) ()

const frame=page.frame({url:"https://ui.vision./demo/webtest/frames/frame1.html"}) // this will return the frame element which we store in variable

//first here we check that if frame is present or not if exist then interact else it is null

if(frame)
{

   await frame.locator("[name='mytext1']").fill("hello");

}

else{

    console.log("Frame is not available")
}

await page.waitForTimeout(5000); 


})



//---Appraoch2: using frame Locator()

test("inner frame demo",async({page})=>{

const inputBox=page.frameLocator("[src='frame_1.html]'").locator("[name='mytext1']");

await inputBox.fill("john");


})



test.only("inner/child frames demo", async({page})=>{


await page.goto("https://ui.vision/demo/webtest/frames/")

const frame3=page.frame({url:"https://ui.vision./demo/webtest/frames/frame1.html"})

if(frame3)
{

   await frame3.locator("[name='mytext3']").fill("welcome")

   // for finding the element inside the child frame we use method childFrames()

   const childframes=frame3.childFrames();

   console.log("Child frames inside the frame 3:",childframes.length);  //only 1 child frame exist

   const radio=childframes[0].getByLabel("I am a human");

   await radio.check(); // select raddio button

   await expect(radio).toBeChecked();
}
else{

    console.log("frame3 is not found...");
}

await page.waitForTimeout(5000);

})