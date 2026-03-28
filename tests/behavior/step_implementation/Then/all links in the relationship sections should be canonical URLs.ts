import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('all links in the relationship sections should be canonical URLs', () => {
    cy.get(`[data-testid="main-area-secondary"] section a`).then(links => {
        links.each((index, link) => {
            cy.wrap(link.getAttribute('href'))
                .should('match', /^(.*)-([0-9]+)$/)
        })
    })
})
