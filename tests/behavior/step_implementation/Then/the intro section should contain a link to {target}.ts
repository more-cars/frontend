import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the about section should contain a link to {string}', (target: string) => {
    switch (target.toLowerCase()) {
        case 'more cars':
            cy.get(`footer nav[aria-label="Social Media Links"] [aria-label="More Cars"]`)
                .should('have.attr', 'href', '/')
            break
        case 'flickr':
            cy.get(`footer nav[aria-label="Social Media Links"] [aria-label="Flickr"]`)
                .should('have.attr', 'href', 'https://www.flickr.com/photos/more-cars/')
            break
        case 'youtube':
            cy.get(`footer nav[aria-label="Social Media Links"] [aria-label="YouTube"]`)
                .should('have.attr', 'href', 'https://www.youtube.com/@more-cars')
            break
        default:
            assert.fail(`"${target}" is not a valid target`)
    }
})
