import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"
import {selectRandomEntries} from "../../../_helper/selectRandomEntries.js"

const {Then} = createBdd()

Then('each item in the BRAND list should link to the respective detail page',
    async function ({page}) {
        const links = await page.getByTestId('brands-list')
            .getByRole('listitem')
            .getByRole('link')
            .all()

        for (const link of selectRandomEntries(links, 5)) {
            expect(await link.getAttribute('href'))
                .toMatch(/\/brands\/\d+/)
        }
    })
