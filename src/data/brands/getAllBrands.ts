import type {BrandNode} from "../../types/brands/BrandNode.mts"
import axios from "axios"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getAllBrands(): Promise<false | Array<BrandNode>> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/brands`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return false
}
