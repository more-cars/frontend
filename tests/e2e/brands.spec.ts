import {expect, test} from '@playwright/test'
import AxeBuilder from "@axe-core/playwright"

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

test('AXE', async ({page}) => {
    await page.goto('/brands')

    const accessibilityScanResults = await new AxeBuilder({page})
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
})
