//including the test and expect from node modules
//test -> is used to write a test cases 
//expect -> is used for assertion 
//require is a node js built in function 
const {test, expect}= require('@playwright/test')
//Alternative 
//import {test,expport} from '@playwright/test'

//page is a fixture 
//async before a functoion makes the function returns a promise
//async means not happening at the same time 
            //javascript is a by nature asynchonous language , that is 
//await before a function makes the functon wait for a promoise 
    //since we want our first line execute completely before jumping to next line , so await is used 
test('visiting google site',async({page})=>{ 
    await page.goto('https://dev.keela.co')
    await expect(page).toHaveTitle('Google');
})

