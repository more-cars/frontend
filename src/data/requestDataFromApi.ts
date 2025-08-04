import axios from "axios"
import {getApiBaseUrl} from "./getApiBaseUrl.ts"

export async function requestDataFromApi(path: string) {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}${path}`, {
                auth: {
                    username: process.env.API_BASIC_AUTH_USERNAME,
                    password: process.env.API_BASIC_AUTH_PASSWORD,
                }
            })
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code} - ${error.input} - ${path}`)
    }

    return false
}
