import type {CarModelNode} from "../../types/car-models/CarModelNode"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getCarModelById(id: number): Promise<false | CarModelNode> {
    return requestDataFromApi(`/car-models/${id}`)
}
