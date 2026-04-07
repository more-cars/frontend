import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiImageNode} from "./types/ApiImageNode"
import type {ImageNode} from "./types/ImageNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllImages(params?: DataSearchParams) {
    const url = getApiRequestUrl(DataNodeType.IMAGE, params)
    const apiData: ApiImageNode[] = (await requestDataFromApi(url))?.data || []
    const data: ImageNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as ImageNode)
    })

    return data
}
