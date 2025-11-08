import type {CarModelNode} from "./types/CarModelNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelNode} from "./types/ApiCarModelNode"

export async function getAllCarModels() {
    const apiData = (await requestDataFromApi('/car-models?sort_by_property=name')).data as ApiCarModelNode[]
    const data: CarModelNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
