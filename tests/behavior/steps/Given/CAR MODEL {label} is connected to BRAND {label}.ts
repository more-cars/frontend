import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('CAR MODEL {string} is connected to BRAND {string}',
    async function ({}, carModelLabel: string, brandLabel: string) {
        // TODO
    })
