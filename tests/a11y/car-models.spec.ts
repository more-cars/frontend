import {test} from '@playwright/test'
import {runAccessibilityScanner} from './runAccessibilityScanner.ts'

test('Car Models: Overview Page', async ({page}) => {
    test.slow()
    await page.goto('/car-models')

    await runAccessibilityScanner(page)
})
