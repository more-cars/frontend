import {expect, test} from '@playwright/test'

test('Brand overview page has a title', async ({page}) => {
    await page.goto('/brands')

    await expect(page)
        .toHaveTitle(/Brands/)
})

test('Brand overview page has a list of all brands', async ({page}) => {
    await page.goto('/brands')

    await expect(page.getByRole('link'))
        .toHaveCount(3)
})
