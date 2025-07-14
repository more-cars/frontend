import {test} from '@playwright/test'
import {runAccessibilityScanner} from "./runAccessibilityScanner.js"

test('Brands', async ({page}) => {
    await page.goto('/brands')

    await runAccessibilityScanner(page)
})
