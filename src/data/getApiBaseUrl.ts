export function getApiBaseUrl() {
    const port = process.env.API_PORT
    if (!port) {
        throw new Error('Missing port')
    }

    const hostname = process.env.API_HOST
    if (!hostname) {
        throw new Error('Missing hostname')
    }

    let protocol = 'https'
    if (['80', '8080'].includes(port)) {
        protocol = 'http'
    }

    return `${protocol}://${process.env.API_HOST}:${process.env.API_PORT}`
}
