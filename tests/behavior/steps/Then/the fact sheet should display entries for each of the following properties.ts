import {createBdd, DataTable} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the fact sheet should display entries for each of the following properties',
    async function ({page}, data: DataTable) {
        for (const row of data.hashes()) {
            await expect(
                page.locator('[aria-label="fact sheet"]')
                    .locator(`[aria-label="${row._property_}"]`)
            ).toBeVisible()
        }
    })
