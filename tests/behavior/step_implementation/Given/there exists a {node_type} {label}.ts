import {Given} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

// TODO currently it is assumed that a node exists -> needs to be evaluated -> when there is none then we have to create it
Given('there exists a {string} {string}', (nodeType: string, label: string) => {
    cy.visit('/' + getNormalizedNodeTypePlural(nodeType))

    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"] > li`)
        .first()
        .find('a')
        .click()

    cy.get(`[aria-label="id"`)
        .invoke('text')
        .as('label_' + label)
})
