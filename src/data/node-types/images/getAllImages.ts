import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiImageNode} from "./types/ApiImageNode"
import type {ImageNode} from "./types/ImageNode"

export async function getAllImages(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.IMAGE, params)
    const apiData = (await requestDataFromApi(url)).data as ApiImageNode[]
    const data: ImageNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
