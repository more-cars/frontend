import {Given} from "@badeball/cypress-cucumber-preprocessor"
import {MockData} from "../../lib/MockData"

Given('there are {int} {string}s', (amount: number, nodeType: string) => {
    MockData.setNodeCount(nodeType, amount)
})
