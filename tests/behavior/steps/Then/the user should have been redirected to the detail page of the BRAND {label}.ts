import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the user should have been redirected to the detail page of the BRAND {string}',
    async function ({page}, label: string) {
        const brandId: number = this.brand

        await expect(page.locator('[aria-label="id"]'))
            .toHaveText(brandId.toString())
    })
