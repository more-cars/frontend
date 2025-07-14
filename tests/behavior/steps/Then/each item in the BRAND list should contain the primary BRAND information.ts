import {createBdd} from "playwright-bdd"
import {expect, test} from "@playwright/test"
import {selectRandomEntries} from "../../../_helper/selectRandomEntries.ts"

const {Then} = createBdd()

Then('each item in the BRAND list should contain the primary BRAND information',
    async function ({page}) {
        test.slow()
        const brands = await page.getByTestId('brands-list')
            .getByRole('listitem', {name: "brand"})
            .all()

        for (const brand of selectRandomEntries(brands, 5)) {
            await expect(brand.locator('[aria-label="name"]'))
                .not.toBeEmpty()
            await expect(brand.locator('[aria-label="founded"]'))
                .toContainText('founded', {ignoreCase: true})
            await expect(brand.locator('[aria-label="defunct"]'))
                .toContainText('defunct', {ignoreCase: true})
        }
    })
