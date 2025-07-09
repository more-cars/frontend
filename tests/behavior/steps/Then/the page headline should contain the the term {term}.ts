import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the page headline should contain the the term {string}',
    async function ({page}, term: string) {
        await expect(page.getByRole('heading'))
            .toContainText(term, {ignoreCase: true})
    })
