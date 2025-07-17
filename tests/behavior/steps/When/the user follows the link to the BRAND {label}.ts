import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user follows the link to the BRAND {string}',
    async function ({page}, label: string) {
        const brandId = this.brand

        await page.getByTestId(`brand-${brandId}`)
            .getByRole('link')
            .click()
    })
