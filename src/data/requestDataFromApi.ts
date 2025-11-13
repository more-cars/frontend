import axios from "axios"
import https from 'https'
import {getApiBaseUrl} from "./getApiBaseUrl"

// Axios will fail requests when the SSL certificate is invalid.
// As long as the dev and testing environments have no valid certificates we have to tell axios to accept such requests.
axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false
})

export async function requestDataFromApi(path: string) {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}${path}`, {
                auth: {
                    username: process.env.API_BASIC_AUTH_USERNAME as string,
                    password: process.env.API_BASIC_AUTH_PASSWORD as string,
                }
            })
        return response.data
    } catch (e) {
        console.error(`Error: ${e}`)
    }

    return false
}
