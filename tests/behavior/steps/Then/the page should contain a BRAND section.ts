import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the page should contain a BRAND section',
    async function ({page}) {
        await expect(
            page.getByRole('region')
                .filter({has: page.getByRole('heading', {name: 'Brand'})})
        ).toBeVisible()
    })
