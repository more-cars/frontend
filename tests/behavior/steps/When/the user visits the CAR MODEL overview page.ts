import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user visits the "CAR MODEL" overview page',
    async function ({page}) {
        await page.goto('/car-models')
    })
