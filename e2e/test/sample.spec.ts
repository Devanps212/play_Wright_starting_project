import {test, expect, Page} from '@playwright/test'

test.describe('Test login Page', ()=>{
    test('form submission', async({page} :{page:Page}) : Promise<void>=>{
        await page.goto('/')

        await page.getByTestId('login-email-field').fill('oliver@example.com')
        await page.getByTestId('login-password-field').fill('welcome')
        await page.getByTestId('login-submit-button').click()

        await expect(page.getByTestId('navbar-username-label')).toBeVisible()
        await expect(page.getByTestId('navbar-logout-link')).toBeVisible()
        
    })
})