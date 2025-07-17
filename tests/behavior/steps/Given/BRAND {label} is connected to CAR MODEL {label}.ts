import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('BRAND {string} is connected to CAR MODEL {string}',
    async function ({}, brandLabel: string, carModelLabel: string) {
        // TODO
    })
