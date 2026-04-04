import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiVideoNode} from "./types/ApiVideoNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {VideoNode} from "./types/VideoNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllVideos(params?: { page: number }) {
    const urlParams = {page: params?.page, sortByProperty: 'title'}
    const url = getApiRequestUrl(DataNodeType.VIDEO, urlParams)
    const apiData: ApiVideoNode[] = (await requestDataFromApi(url))?.data || []
    const data: VideoNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as VideoNode)
    })

    return data
}
