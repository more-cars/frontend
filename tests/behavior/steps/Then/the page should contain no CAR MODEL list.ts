import {createBdd} from "playwright-bdd"
import {expect} from "@playwright/test"

const {Then} = createBdd()

Then('the page should contain no CAR MODEL list',
    async function ({page}) {
        await expect(
            page.getByRole('region')
                .filter({has: page.getByRole('heading', {name: 'Car Models'})})
        ).not.toBeVisible()
    })
