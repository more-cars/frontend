import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the user should have been redirected to the detail page of the IMAGE {string}',
    async function ({page}, label: string) {
        const imageId: number = this.image

        await expect(page.locator('[aria-label="id"]'))
            .toHaveText(imageId.toString())
    })
