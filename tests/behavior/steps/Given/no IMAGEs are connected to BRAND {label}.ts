import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('no IMAGEs are connected to BRAND {string}',
    async function ({}, brandLabel: string) {
        // TODO
    })
