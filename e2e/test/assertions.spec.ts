import {expect, Page, test} from '@playwright/test'

test("assertion testing", async({page} : {page: Page}): Promise<void>=>{
    await page.goto("https://easyrentacar.shop/")

    //toHaveURL
    await expect(page).toHaveURL('https://easyrentacar.shop/')

    //toHaveTitle
    await expect(page).toHaveTitle('Rent-A-Car')

    //toBeVisible
    await expect(page.getByRole('img', { name: 'Company Logo' })).toBeVisible()

    //toBeEnabled
    await expect(page.getByPlaceholder('Pickup location')).toBeEnabled()

    //toBeDisabled
    // await expect(page.getByPlaceholder('Pickup location')).toBeDisabled()

    //toHaveAttribute
    await expect(page.getByText('NameLorem ipsum dolor sit').nth(1)).toHaveAttribute('class', 'customer col-12 col-md-5 ms-3')

    //toHaveText
    await expect(page.getByRole('link', { name: 'Become Partner' })).toHaveText('Become Partner')

    //toHaveValue
    await expect(page.getByPlaceholder('Pickup location')).toHaveValue('')

    //toHaveCount
    await expect(page.locator('ul[class=footer-Lists]')).toHaveCount(3)

    //negative Assertion
    await expect(page).not.toHaveTitle('Rent-A-Carssss')
})