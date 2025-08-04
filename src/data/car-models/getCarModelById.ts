import type {CarModelNode} from "../../types/car-models/CarModelNode.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getCarModelById(id: number): Promise<false | CarModelNode> {
    return await requestDataFromApi(`/car-models/${id}`)
}
