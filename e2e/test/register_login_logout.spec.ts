import {Page} from '@playwright/test'
import {faker} from '@faker-js/faker'
import LoginPage from '../poms/login'
import { test } from '../fixtures'


test.describe('Register page', ()=>{
    
    //POM way
    test('should regitser a user', async({page} : {page: Page}): Promise<void>=>{
        
        const name = 'Local User'
        const email = 'localuserss@exampless.com'
        const password = 'welcome'
        const login = new LoginPage(page)

        await page.goto('/')

        //Register link click
        await page.getByTestId('login-register-link').click()

        //Entering details and Register clicking
        await page.getByTestId('signup-name-field').fill(name)
        await page.getByTestId('signup-email-field').fill(email)
        await page.getByTestId('signup-password-field').fill(password)
        await page.getByTestId('signup-password-confirmation-field').fill(password)
        await page.getByTestId('signup-submit-button').click()

        //Login page
        await login.loginAndVerfyUser({email, password, name})
    }),

    //Using fake data
    test('should register a user with fake data', async({page} : {page: Page}): Promise<void>=>{

        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password() 
        const login = new LoginPage(page)

        await page.goto('/') 

        //Register user
        await page.getByTestId('login-register-link').click()

        //Entering details and Register clicking
        await page.getByTestId('signup-name-field').fill(name)
        await page.getByTestId('signup-email-field').fill(email)
        await page.getByTestId('signup-password-field').fill(password)
        await page.getByTestId('signup-password-confirmation-field').fill(password)
        await page.getByTestId('signup-submit-button').click()

        //Login page
        await login.loginAndVerfyUser({name, email, password})
    })

    //Using custom fixtures
    test('should register a user with fake data2', async({page, loginPage} : {page: Page, loginPage: LoginPage}): Promise<void>=>{

        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password() 

        await page.goto('/') 

        //Register user
        await page.getByTestId('login-register-link').click()

        //Entering details and Register clicking
        await page.getByTestId('signup-name-field').fill(name)
        await page.getByTestId('signup-email-field').fill(email)
        await page.getByTestId('signup-password-field').fill(password)
        await page.getByTestId('signup-password-confirmation-field').fill(password)
        await page.getByTestId('signup-submit-button').click()

        //Login page
        await loginPage.loginAndVerfyUser({name, email, password})
    })
})