import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('no BRAND is connected to the IMAGE {string}',
    async function ({}, imageLabel: string) {
        // TODO
    })
