import type {BrandNode} from "../../types/brands/BrandNode.mts"
import axios from "axios"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getBrandById(id: number): Promise<BrandNode> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/brands/${id}`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }
}
