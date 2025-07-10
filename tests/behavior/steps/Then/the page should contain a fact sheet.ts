import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the page should contain a fact sheet',
    async function ({page}) {
        await expect(page.locator('[aria-label="fact sheet"]'))
            .toContainText("Fact Sheet")
    })
