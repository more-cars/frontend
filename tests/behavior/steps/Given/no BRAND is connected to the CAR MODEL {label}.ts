import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('no BRAND is connected to the CAR MODEL {string}',
    async function ({}, carModelLabel: string) {
        // TODO
    })
