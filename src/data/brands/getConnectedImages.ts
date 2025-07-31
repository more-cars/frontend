import axios from "axios"
import type {BrandHasImageRelation} from "../../types/brands/BrandHasImageRelation.mts"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getConnectedImages(brandId: number): Promise<Array<BrandHasImageRelation>> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/brands/${brandId}/has-image`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return []
}
