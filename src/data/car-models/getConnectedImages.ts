import axios from "axios"
import type {CarModelHasImageRelation} from "../../types/car-models/CarModelHasImageRelation.mts"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getConnectedImages(carModelId: number): Promise<Array<CarModelHasImageRelation>> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/car-models/${carModelId}/has-image`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return []
}
