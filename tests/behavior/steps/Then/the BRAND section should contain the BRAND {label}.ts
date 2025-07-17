import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the BRAND section should contain the BRAND {string}',
    async function ({page}, brandLabel: string) {
        const brandId = this.brand

        await expect(
            page.getByTestId(`brand-${brandId}`)
        ).toBeVisible()
    })
