import {createBdd} from "playwright-bdd"
import {expect, test} from "@playwright/test"
import {selectRandomEntries} from "../../../_toolbox/selectRandomEntries"

const {Then} = createBdd()

Then('each item in the IMAGE list should contain the primary IMAGE information',
    async function ({page}) {
        test.slow()
        const images = await page.getByTestId('image-list')
            .getByRole('listitem', {name: "image", exact: true})
            .all()

        for (const image of selectRandomEntries(images, 5)) {
            await expect(image.locator('[aria-label="name"]'))
                .not.toBeEmpty()
            await expect(image.locator('[aria-label="creator"]'))
                .toContainText('creator', {ignoreCase: true})
            await expect(image.locator('[aria-label="image provider"]'))
                .toContainText('image provider', {ignoreCase: true})
            await expect(image.locator('[aria-label="license"]'))
                .toContainText('license', {ignoreCase: true})
        }
    })
