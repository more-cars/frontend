import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelNode} from "./types/ApiCarModelNode"
import type {CarModelNode} from "./types/CarModelNode"

export async function getAllCarModels(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.CAR_MODEL, params)
    const apiData: ApiCarModelNode[] = (await requestDataFromApi(url))?.data || []
    const data: CarModelNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
