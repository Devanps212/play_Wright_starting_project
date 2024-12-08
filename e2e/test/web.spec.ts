import { expect, Page} from '@playwright/test'
import { faker } from '@faker-js/faker'
import { test } from '../fixtures'
import UserSignup from '../poms/signUp'
// import HomePage from '../poms/home'

test.describe('Yotube test', ()=>{
    test('should search video', async({page, RACLogin}: {page: Page, RACLogin: UserSignup})=>{
        await page.goto('https://easyrentacar.shop/')
        const name = faker.person.fullName()
        const email =  faker.internet.email()
        const password = `${faker.internet.password()}A@$`

        // const login = new UserLogin(page)
        // const signUp = new UserSignup(page)
        // const home = new HomePage(page)

        await page.goto('https://easyrentacar.shop/')

        await expect(page.getByRole('link', {name:'SignUp/SignIn'})).toBeVisible()
        await page.getByRole('link', {name:'SignUp/SignIn'}).click()
        await page.getByRole('link', {name:'Sign up'}).click()
        await RACLogin.signUp({name, email, password})
        // await login.login({email, password})
        // await home.check(name)

    })
})