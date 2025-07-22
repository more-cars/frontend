import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('BRAND {string} is connected to IMAGE {string}',
    async function ({}, brandLabel: string, imageLabel: string) {
        // TODO
    })
