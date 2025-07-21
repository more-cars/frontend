import {test} from '@playwright/test'
import {runAccessibilityScanner} from "./runAccessibilityScanner.js"

test('Images: Overview Page', async ({page}) => {
    await page.goto('/images')

    await runAccessibilityScanner(page)
})
