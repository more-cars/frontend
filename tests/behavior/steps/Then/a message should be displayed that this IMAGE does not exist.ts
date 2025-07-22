import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('a message should be displayed that this IMAGE does not exist',
    async function ({page}) {
        await expect(page.getByTestId('image-not-found'))
            .toBeVisible()

        await expect(page.getByTestId('image-not-found'))
            .not.toBeEmpty()
    })
