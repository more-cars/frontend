import type {CarModelNode} from "../../types/car-models/CarModelNode.mts"
import axios from "axios"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getCarModelById(id: number): Promise<CarModelNode> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/car-models/${id}`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }
}
