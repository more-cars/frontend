import {Given} from "@badeball/cypress-cucumber-preprocessor"

Given('there exist more than {int} {string} nodes', (amount: string, nodeType: string) => {
    // TODO currently it is assumed that the amount of nodes exists -> needs to be evaluated -> when there are not enough nodes then we have to create them
})
