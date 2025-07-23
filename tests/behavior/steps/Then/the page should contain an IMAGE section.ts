import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the page should contain an IMAGE section',
    async function ({page}) {
        await expect(
            page.getByRole('region')
                .filter({has: page.getByRole('heading', {name: 'Image'})})
        ).toBeVisible()
    })
