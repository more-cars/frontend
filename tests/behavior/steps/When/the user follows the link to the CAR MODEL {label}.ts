import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user follows the link to the CAR MODEL {string}',
    async function ({page}, label: string) {
        const carModelId = this.carModel

        await page.getByTestId(`car-model-${carModelId}`)
            .getByRole('link')
            .click()
    })
