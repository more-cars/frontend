import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('there exists no {string} {string}',
    async function ({}, nodeType: string, label: string) {
        switch (nodeType.toLowerCase()) {
            case 'brand':
                this.brand = -42
                break
            case 'car model':
                this.carModel = -43
                break
            case 'image':
                this.image = -44
                break
        }
    })
