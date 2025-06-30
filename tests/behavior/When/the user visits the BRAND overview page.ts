import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user visits the "BRAND" overview page',
    async function ({page}) {
        await page.goto('/brands')
    })
