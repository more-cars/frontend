import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelNode} from "./types/ApiCarModelNode"
import type {CarModelNode} from "./types/CarModelNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllCarModels(params?: DataSearchParams) {
    const url = getApiRequestUrl(DataNodeType.CAR_MODEL, params)
    const apiData: ApiCarModelNode[] = (await requestDataFromApi(url))?.data || []
    const data: CarModelNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as CarModelNode)
    })

    return data
}
