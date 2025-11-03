import axios from "axios"
import {getApiBaseUrl} from "./getApiBaseUrl"

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
