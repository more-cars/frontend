import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the user should have been redirected to the detail page of the CAR MODEL {string}',
    async function ({page}, label: string) {
        const carModelId: number = this.carModel

        await expect(page.locator('[aria-label="id"]'))
            .toHaveText(carModelId.toString())
    })
