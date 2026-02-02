export function getApiBaseUrl() {
    const port = process.env.API_PORT
    if (!port) {
        throw new Error('Missing port')
    }

    const hostname = process.env.API_HOST
    if (!hostname) {
        throw new Error('Missing hostname')
    }

    // The frontend is assumed to always run in the same cluster as the API.
    // Therefore, it can circumvent the gateway and talk directly with the API.
    // Because the API only listens to HTTP requests, the protocol is hardcoded to HTTP here.
    const protocol = 'http'

    return `${protocol}://${process.env.API_HOST}:${process.env.API_PORT}`
}
