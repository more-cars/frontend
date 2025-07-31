import axios from "axios"
import type {BrandHasCarModelRelation} from "../../types/brands/BrandHasCarModelRelation.mts"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getConnectedCarModels(brandId: number): Promise<Array<BrandHasCarModelRelation>> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/brands/${brandId}/has-car-model`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return []
}
