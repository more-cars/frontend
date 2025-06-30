import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('a message should be displayed that there are no BRANDs',
    async function ({page}) {
        await expect(page.getByTestId('brands-list-empty'))
            .toBeVisible()

        await expect(page.getByTestId('brands-list-empty'))
            .not.toBeEmpty()
    })
