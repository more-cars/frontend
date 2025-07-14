import {createBdd} from "playwright-bdd"

const {Given} = createBdd()

Given('there exists a CAR MODEL {string}',
    async function ({}, label) {
        this.carModel = 443
    })
