import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user visits the detail page of the BRAND {string}',
    async function ({page}, label) {
        const brand = this.brand
        await page.goto(`/brands/${brand}`)
    })

