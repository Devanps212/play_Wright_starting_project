import { Page } from "@playwright/test";

export default class UserSignup{
    constructor(
        public page: Page
    ){}

    signUp = async({
        name,
        email,
        password
    } : {
        name: string,
        email: string,
        password: string
    }): Promise<void>=>{

        await this.page.getByPlaceholder('name').fill(name)
        await this.page.getByPlaceholder('Enter your email').fill(email)
        await this.page.getByPlaceholder('*****').fill(password)
        await this.page.getByPlaceholder('****', { exact: true }).fill(password)
        await this.page.getByRole('button', {name:'Submit'}).click()
    }
}