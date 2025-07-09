import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the BRAND list should be displayed',
    async function ({page}) {
        await expect(page.getByTestId('brands-list'))
            .toBeVisible()
    })
