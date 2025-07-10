import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the page title should contain the term {string}',
    async function ({page}, term: string) {
        expect(await page.title())
            .toContain(term)
    })
