import {test, expect, Page} from '@playwright/test'

test.describe('Register page', ()=>{
    test('should regitser a user', async({page} : {page: Page}): Promise<void>=>{
        await page.goto('/')

        //Register link click
        await page.getByTestId('login-register-link').click()

        //Entering details and Register clicking
        await page.getByTestId('signup-name-field').fill('Local User')
        await page.getByTestId('signup-email-field').fill('localuserss@examples.com')
        await page.getByTestId('signup-password-field').fill('welcome')
        await page.getByTestId('signup-password-confirmation-field').fill('welcome')
        await page.getByTestId('signup-submit-button').click()

        //Login page
        await page.getByTestId('login-email-field').fill('localuserss@examples.com')
        await page.getByTestId('login-password-field').fill('welcome')
        await page.getByTestId('login-submit-button').click()

        //visibility check
        await expect(page.getByTestId('navbar-username-label')).toBeVisible()
        await expect(page.getByTestId('navbar-logout-link')).toBeVisible()
        await page.getByTestId('navbar-logout-link').click()

        await page.close()
    })
})