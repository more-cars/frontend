import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('no IMAGEs are connected to CAR MODEL {string}',
    async function ({}, carModelLabel: string) {
        // TODO
    })
