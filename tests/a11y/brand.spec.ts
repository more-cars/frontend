import {test} from '@playwright/test'
import {runAccessibilityScanner} from "./runAccessibilityScanner.js"

test('Brands: Detail Page', async ({page}) => {
    await page.goto('/brands/320')

    await runAccessibilityScanner(page)
})
