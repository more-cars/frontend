import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('IMAGE {string} is connected to CAR MODEL {string}',
    async function ({}, imageLabel: string, carModelLabel: string) {
        // TODO
    })
