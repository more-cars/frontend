import axios from "axios"
import https from 'https'
import {getApiBaseUrl} from "./getApiBaseUrl"

// Normally, the frontend and the REST API run in the same cluster, the same environment, the same network.
// They don't need to encrypt their communication - they can use plain HTTP.
// But the frontend has the option to switch to a different API, which might not be in the same network.
// Now, HTTPS is mandatory for every request.
// When the API is deployed locally (e.g. in Minikube) it will not have a valid TLS certificate.
// Axios will not accept requests with invalid certificates and will fail them.
// The following option tells Axios to ignore invalid certificates.
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
