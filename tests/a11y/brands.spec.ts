import {test} from '@playwright/test'
import {runAccessibilityScanner} from "./runAccessibilityScanner.js"

test('Brands: Overview Page', async ({page}) => {
    await page.goto('/brands')

    await runAccessibilityScanner(page)
})
