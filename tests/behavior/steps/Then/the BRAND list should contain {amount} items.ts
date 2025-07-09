import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the BRAND list should contain {int} items',
    async function ({page}, amount: number) {
        await expect(
            page.getByTestId('brands-list')
                .getByRole('listitem', {name: "brand"})
        ).toHaveCount(amount)
    })
