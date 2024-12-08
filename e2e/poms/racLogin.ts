import { Page } from "@playwright/test";

export default class UserLogin{
    constructor(
        public page : Page
    ){}

    login = async({
        email,
        password
    } : {
        email: string,password: string
    }): Promise<void>=>{
        await this.page.getByPlaceholder('Enter your email').fill(email)
        await this.page.getByPlaceholder('*****').fill(password)
        await this.page.getByRole('button', {name: 'Submit'}).click()
    }
}