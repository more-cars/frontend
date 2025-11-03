import {test} from '@playwright/test'
import {runAccessibilityScanner} from "./runAccessibilityScanner"

test('Images: Detail Page', async ({page}) => {
    await page.goto('/images/12806')

    await runAccessibilityScanner(page)
})
