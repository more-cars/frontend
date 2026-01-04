import {Given} from "@badeball/cypress-cucumber-preprocessor"
import {MockData} from "../../lib/MockData"

Given('there is no {string}', (nodeType: string) => {
    MockData.setNodeCount(nodeType.toLowerCase(), 0)
})
