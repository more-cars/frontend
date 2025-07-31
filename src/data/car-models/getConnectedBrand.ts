import axios from "axios"
import type {CarModelBelongsToBrandRelation} from "../../types/car-models/CarModelBelongsToBrandRelation.mts"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getConnectedBrand(carModelId: number): Promise<CarModelBelongsToBrandRelation> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/car-models/${carModelId}/belongs-to-brand`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }
}
