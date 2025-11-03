import {test} from '@playwright/test'
import {runAccessibilityScanner} from "./runAccessibilityScanner"

test('Brands: Detail Page', async ({page}) => {
    await page.goto('/brands/573')

    await runAccessibilityScanner(page)
})
