import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('a message should be displayed that this BRAND does not exist',
    async function ({page}) {
        await expect(page.getByTestId('brand-not-found'))
            .toBeVisible()

        await expect(page.getByTestId('brand-not-found'))
            .not.toBeEmpty()
    })
