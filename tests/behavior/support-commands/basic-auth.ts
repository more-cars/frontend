Cypress.Commands.overwrite('visit', (original, url, options = {}) => {
    return cy.env(['basicAuthUsername', 'basicAuthPassword'])
        .then(({basicAuthUsername, basicAuthPassword}) => {
            const extendedOptions = {
                ...options,
                auth: {
                    username: basicAuthUsername || '',
                    password: basicAuthPassword || '',
                },
            }

            // @ts-expect-error TS2554 TS2554 TS2554
            return original(url, extendedOptions)
        })
})
