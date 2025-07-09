import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('each item in the BRAND list should link to the respective detail page',
    async function ({page}) {
        const links = await page.getByTestId('brands-list')
            .getByRole('listitem')
            .getByRole('link')
            .all()

        for (const link of links) {
            expect(await link.getAttribute('href'))
                .toMatch(/\/brands\/\d+/)
        }
    })
