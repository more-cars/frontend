import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('there exists no BRAND {string}',
    async function ({}, label) {
        this.brand = -42
    })
