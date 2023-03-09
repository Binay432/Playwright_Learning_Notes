import { chromium } from "@playwright/test";
import { test, expect } from '@playwright/test';
 
test.describe("launching browser",()=>{
test('visiting google page',async()=>{

    const browser=await chromium.launch();
    const context= await browser.newContext();
    const page= await context.newPage();
    page.goto("https://www.google.com/");
    await browser.close();
    })
})