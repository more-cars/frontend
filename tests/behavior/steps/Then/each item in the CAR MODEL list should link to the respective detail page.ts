import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('each item in the CAR MODEL list should link to the respective detail page',
    async function ({page}) {
        const links = await page.getByTestId('car-model-list')
            .getByRole('listitem')
            .getByRole('link')
            .all()

        for (const link of links.slice(0, 10)) { // TODO select a handful of random items
            expect(await link.getAttribute('href'))
                .toMatch(/\/car-models\/\d+/)
        }
    })
