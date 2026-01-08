Cypress.Commands.overwrite('visit', (original, url, options = {}) => {
    const extendedOptions = {
        ...options,
        auth: {
            username: Cypress.env('BASIC_AUTH_USERNAME') || '',
            password: Cypress.env('BASIC_AUTH_PASSWORD') || '',
        },
    }

    // @ts-ignore
    return original(url, extendedOptions)
})
