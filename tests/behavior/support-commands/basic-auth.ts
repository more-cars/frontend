Cypress.Commands.overwrite('visit', (original, url, options = {}) => {
    const extendedOptions = {
        ...options,
        auth: {
            username: cy.env(['basicAuthUsername']) || '',
            password: cy.env(['basicAuthPassword']) || '',
        },
    }

    // @ts-expect-error TS2554 TS2554
    return original(url, extendedOptions)
})
