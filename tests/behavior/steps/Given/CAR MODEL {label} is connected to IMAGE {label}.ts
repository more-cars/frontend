import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('CAR MODEL {string} is connected to IMAGE {string}',
    async function ({}, carModelLabel: string, imageLabel: string) {
        // TODO
    })
