import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user visits the detail page of the CAR MODEL {string}',
    async function ({page}, label) {
        const carModel = this.carModel
        await page.goto(`/car-models/${carModel}`)
    })
