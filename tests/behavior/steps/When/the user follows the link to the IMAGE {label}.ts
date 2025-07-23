import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user follows the link to the IMAGE {string}',
    async function ({page}, label: string) {
        const imageId = this.image

        await page.getByTestId(`image-${imageId}`)
            .getByRole('link')
            .click()
    })
