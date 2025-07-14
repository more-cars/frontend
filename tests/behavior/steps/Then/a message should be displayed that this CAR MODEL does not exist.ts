import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('a message should be displayed that this CAR MODEL does not exist',
    async function ({page}) {
        await expect(page.getByTestId('car-model-not-found'))
            .toBeVisible()

        await expect(page.getByTestId('car-model-not-found'))
            .not.toBeEmpty()
    })
