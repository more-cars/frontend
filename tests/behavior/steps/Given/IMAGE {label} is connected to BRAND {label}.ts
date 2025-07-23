import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('IMAGE {string} is connected to BRAND {string}',
    async function ({}, imageLabel: string, carModelLabel: string) {
        // TODO
    })
