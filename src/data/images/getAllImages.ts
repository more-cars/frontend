import axios from "axios"
import type {ImageNode} from "../../types/images/ImageNode.mts"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getAllImages(): Promise<false | Array<ImageNode>> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/images`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return false
}
