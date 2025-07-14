import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the CAR MODEL list should contain {int} items',
    async function ({page}, amount: number) {
        await expect(
            page.getByTestId('car-model-list')
                .getByRole('listitem', {name: "car-model"})
        ).toHaveCount(amount)
    })
