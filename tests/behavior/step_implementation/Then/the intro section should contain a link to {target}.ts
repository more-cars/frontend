import {Then} from "@badeball/cypress-cucumber-preprocessor"
import assert from "assert"

Then('the about section should contain a link to {string}', (target: string) => {
    switch (target.toLowerCase()) {
        case 'more cars':
            cy.get(`footer nav[aria-label="Social Media Links"] [aria-label="More Cars start page"]`)
                .should('have.attr', 'href', '/')
            break
        case 'flickr':
            cy.get(`footer nav[aria-label="Social Media Links"] [aria-label="More Cars photos at Flickr"]`)
                .should('have.attr', 'href', 'https://www.flickr.com/photos/more-cars/')
            break
        case 'youtube':
            cy.get(`footer nav[aria-label="Social Media Links"] [aria-label="More Cars videos at YouTube"]`)
                .should('have.attr', 'href', 'https://www.youtube.com/@more-cars')
            break
        case 'instagram':
            cy.get(`footer nav[aria-label="Social Media Links"] [aria-label="More Cars photos at Instagram"]`)
                .should('have.attr', 'href', 'https://www.instagram.com/more_cars_net/')
            break
        default:
            assert.fail(`"${target}" is not a valid target`)
    }
})
