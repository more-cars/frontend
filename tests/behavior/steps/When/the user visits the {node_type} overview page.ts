import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user visits the {string} overview page',
    async function ({page}, nodeType: string) {
        switch (nodeType.toLowerCase()) {
            case 'brand':
                await page.goto('/brands')
                break
            case 'car model':
                await page.goto('/car-models')
                break
            case 'image':
                await page.goto('/images')
                break
        }
    })
