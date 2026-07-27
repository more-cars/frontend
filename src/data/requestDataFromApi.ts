import {Agent, fetch} from 'undici'
import {getApiBaseUrl} from "./getApiBaseUrl"

// TODO reimplement response caching
// const axios =
//     process.env.API_CACHE_DISABLED
//         ? Axios.create()
//         : setupCache(Axios.create())

// allowing invalid certs (e.g. Minikube cluster)
const agent = new Agent({
    connect: {
        rejectUnauthorized: false,
    },
})

export async function requestDataFromApi(path: string) {
    try {
        const response = await fetch(`${getApiBaseUrl()}${path}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            dispatcher: agent,
        })

        const responseBody = await response.text()
        try {
            return JSON.parse(responseBody)
        } catch {
            return responseBody
        }
    } catch (e) {
        console.error(`Error: ${e}`)
    }
}
