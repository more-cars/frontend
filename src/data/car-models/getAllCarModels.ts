import type {CarModelNode} from "../../types/car-models/CarModelNode"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getAllCarModels(): Promise<false | Array<CarModelNode>> {
    return (await requestDataFromApi('/car-models')).data
}
