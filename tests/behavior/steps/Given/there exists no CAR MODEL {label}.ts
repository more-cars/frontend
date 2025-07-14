import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('there exists no CAR MODEL {string}',
    async function ({}, label) {
        this.carModel = -42
    })
