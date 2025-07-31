import axios from "axios"
import type {CarModelNode} from "../../types/car-models/CarModelNode.mts"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getAllCarModels(): Promise<false | Array<CarModelNode>> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/car-models`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return false
}
