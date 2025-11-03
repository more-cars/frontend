import type {CarModelNode} from "../../types/car-models/CarModelNode.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getAllCarModels(): Promise<false | Array<CarModelNode>> {
    return (await requestDataFromApi('/car-models')).data
}
