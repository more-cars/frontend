import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the CAR MODEL list should be displayed',
    async function ({page}) {
        await expect(page.getByTestId('car-model-list'))
            .toBeVisible()
    })
