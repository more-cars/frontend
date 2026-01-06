Cypress.Commands.overwrite('visit', (original, url, options = {}) => {
    return original(url, {
        ...options,
        auth: {
            username: Cypress.env('BASIC_AUTH_USERNAME'),
            password: Cypress.env('BASIC_AUTH_PASSWORD'),
        },
    })
})
