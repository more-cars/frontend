import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the IMAGE section should contain the IMAGE {string}',
    async function ({page}, imageLabel: string) {
        const imageId = this.image

        await expect(
            page.getByTestId(`image-${imageId}`)
        ).toBeVisible()
    })
