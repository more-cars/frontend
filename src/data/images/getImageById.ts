import axios from "axios"
import type {ImageNode} from "../../types/images/ImageNode.mts"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getImageById(id: number): Promise<ImageNode> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/images/${id}`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }
}
