export function getApiBaseUrl() {
    const url = process.env.API_URL

    if (!url) {
        throw new Error('Missing API URL')
    }

    return url
}
