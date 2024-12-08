import {test, expect, Page} from '@playwright/test'

test.describe('assertion test', ()=>{
    test('should test hard and soft  assertion', async({page} : {page: Page})=>{
        await page.goto('https://easyrentacar.shop')

        //Hard assertion
        // await expect(page).toHaveURL('https://easyrentacar.shop/')
        // await expect(page.getByRole('img', { name: 'Company Logo' })).toBeVisible()

        //Soft assertion
        // await expect.soft(page).toHaveURL('https://easyrentacar.shop//')
        // await expect.soft(page.getByRole('img', { name: 'Company Logo' })).toHaveAttribute('alts', 'Company Logo')
    })
})