Cypress.Commands.overwrite('visit', (original, url, options = {}) => {
    const extendedOptions = {
        ...options,
        auth: {
            username: Cypress.env('BASIC_AUTH_USERNAME') || '',
            password: Cypress.env('BASIC_AUTH_PASSWORD') || '',
        },
    }

    // @ts-expect-error TS2554
    return original(url, extendedOptions)
})
