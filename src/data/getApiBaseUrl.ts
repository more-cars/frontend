export function getApiBaseUrl() {
    return `http://${process.env.API_HOST}:${process.env.API_PORT}`
}
