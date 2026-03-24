import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiModelCarBrandNode} from "./types/ApiModelCarBrandNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ModelCarBrandNode} from "./types/ModelCarBrandNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllModelCarBrands(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.MODEL_CAR_BRAND, params)
    const apiData: ApiModelCarBrandNode[] = (await requestDataFromApi(url))?.data || []
    const data: ModelCarBrandNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as ModelCarBrandNode)
    })

    return data
}
