import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('there exists a(n) {string} {string}',
    async function ({}, nodeType: string, label: string) {
        switch (nodeType.toLowerCase()) {
            case 'brand':
                this.brand = 412
                break
            case 'car model':
                this.carModel = 443
                break
            case 'image':
                this.image = 2213
                break
        }
    })
