import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the page should contain a section with the rendered image',
    async function ({page}) {
        const section = page.getByRole('region')
            .filter({has: page.getByRole('heading', {name: 'Image'})})

        await expect(section).toBeVisible()
        await expect(section.getByRole('img')).toBeVisible()
    })
