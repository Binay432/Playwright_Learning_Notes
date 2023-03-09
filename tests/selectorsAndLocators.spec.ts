//selectors are the strings/properties of the web objects 
//selctors are used to create locators (css, class , name, id, text , path ...)
import {test, expect} from '@playwright/test'

test('Selector test',async({page})=>{
    await page.goto("https://test4.keela.co");
    await expect(page).toHaveTitle('Keela');
    await page.pause();
})


