import {expect, test} from '@playwright/test'
import AxeBuilder from "@axe-core/playwright"

test('Brand', async ({page}) => {
    await page.goto('/brands/753')

    const accessibilityScanResults = await new AxeBuilder({page})
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
})
