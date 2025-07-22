import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the IMAGE list should be displayed',
    async function ({page}) {
        await expect(page.getByTestId('image-list'))
            .toBeVisible()
    })
