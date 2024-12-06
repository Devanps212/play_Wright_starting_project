import { Page, expect } from "@playwright/test";

export default class LoginPage{
    constructor(
        public page: Page
    ){}

    loginAndVerfyUser = async({
        email,
        password,
        name
    } : {
        email : string,
        password : string,
        name : string
    }): Promise<void> => {
        await this.page.getByTestId('login-email-field').fill(email)
        await this.page.getByTestId('login-password-field').fill(password)
        await this.page.getByTestId('login-submit-button').click()

        //visibility check
        await expect(this.page.getByTestId('navbar-username-label')).toContainText(name)
        await expect(this.page.getByTestId('navbar-logout-link')).toBeVisible()
        await this.page.getByTestId('navbar-logout-link').click()

        await this.page.close()
    }
}