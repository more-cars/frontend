import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('there exists a BRAND {string}',
    async function ({}, label) {
        this.brand = 412
    })
