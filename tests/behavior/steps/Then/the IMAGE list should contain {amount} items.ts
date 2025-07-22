import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the IMAGE list should contain {int} items',
    async function ({page}, amount: number) {
        await expect(
            page.getByTestId('image-list')
                .getByRole('listitem', {name: "image", exact: true})
        ).toHaveCount(amount)
    })
