import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('no BRAND is connected to CAR MODEL {string}',
    async function ({}, carModelLabel: string) {
        // TODO
    })
