import { Page, expect } from "@playwright/test";

export default class HomePage{
    constructor(
        public page: Page
    ){}

    check = async(name: string):Promise<void>=>{
        await expect(this.page.getByRole('link', { name: 'User Profile' })).toHaveText(name)
    }
}