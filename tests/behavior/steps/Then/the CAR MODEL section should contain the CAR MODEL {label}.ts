import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the CAR MODEL section should contain the CAR MODEL {string}',
    async function ({page}, carModelLabel: string) {
        const carModelId = this.carModel

        await expect(
            page.getByTestId(`car-model-${carModelId}`)
        ).toBeVisible()
    })
