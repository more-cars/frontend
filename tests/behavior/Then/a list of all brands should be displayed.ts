import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('a list of all brands should be displayed',
    async function ({page}) {
        await expect(page.getByRole('link'))
            .toHaveCount(3)
    })
