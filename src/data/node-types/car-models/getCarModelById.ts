import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelNode} from "./types/ApiCarModelNode"
import type {CarModelNode} from "./types/CarModelNode"

export async function getCarModelById(id: number) {
    const apiData = (await requestDataFromApi(`/car-models/${id}`)) as ApiCarModelNode

    if (!apiData) {
        return null
    }

    return apiData.data as CarModelNode
}
