import {createBdd} from "playwright-bdd"

const {When} = createBdd()

When('the user visits the detail page of the {string} {string}',
    async function ({page}, nodeType: string, label: string) {
        switch (nodeType.toLowerCase()) {
            case 'brand':
                const brand = this.brand
                await page.goto(`/brands/${brand}`)
                break
            case 'car model':
                const carModel = this.carModel
                await page.goto(`/car-models/${carModel}`)
                break
            case 'image':
                const image = this.image
                await page.goto(`/images/${image}`)
                break
        }
    })
