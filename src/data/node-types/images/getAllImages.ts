import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiImageNode} from "./types/ApiImageNode"
import type {ImageNode} from "./types/ImageNode"

export async function getAllImages(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.IMAGE, params)
    const apiData: ApiImageNode[] = (await requestDataFromApi(url))?.data || []
    const data: ImageNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
