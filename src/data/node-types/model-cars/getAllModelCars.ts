import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiModelCarNode} from "./types/ApiModelCarNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ModelCarNode} from "./types/ModelCarNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllModelCars(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.MODEL_CAR, params)
    const apiData: ApiModelCarNode[] = (await requestDataFromApi(url))?.data || []
    const data: ModelCarNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as ModelCarNode)
    })

    return data
}
