import {createBdd} from "playwright-bdd"
import {expect, test} from "@playwright/test"
import {selectRandomEntries} from "../../../_toolbox/selectRandomEntries.js"

const {Then} = createBdd()

Then('each item in the CAR MODEL list should contain the primary CAR MODEL information',
    async function ({page}) {
        test.slow()
        const carModels = await page.getByTestId('car-model-list')
            .getByRole('listitem', {name: "car-model"})
            .all()

        for (const carModel of selectRandomEntries(carModels, 5)) {
            await expect(carModel.locator('[aria-label="name"]'))
                .not.toBeEmpty()
            await expect(carModel.locator('[aria-label="built from"]'))
                .toContainText('built from', {ignoreCase: true})
            await expect(carModel.locator('[aria-label="built to"]'))
                .toContainText('built to', {ignoreCase: true})
        }
    })
