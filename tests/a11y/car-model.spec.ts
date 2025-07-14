import {test} from '@playwright/test'
import {runAccessibilityScanner} from './runAccessibilityScanner.ts'

test('Car Models: Detail Page', async ({page}) => {
    await page.goto('/car-models/25')

    await runAccessibilityScanner(page)
})
