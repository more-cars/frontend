import {expect, test} from '@playwright/test'
import AxeBuilder from "@axe-core/playwright"

test('Brands', async ({page}) => {
    await page.goto('/brands')

    const accessibilityScanResults = await new AxeBuilder({page})
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
})
