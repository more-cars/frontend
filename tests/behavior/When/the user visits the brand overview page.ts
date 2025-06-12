import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user visits the brand overview page',
    async function ({page}) {
        await page.goto('/brands')
    })
