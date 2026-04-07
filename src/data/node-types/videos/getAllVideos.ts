import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiVideoNode} from "./types/ApiVideoNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {VideoNode} from "./types/VideoNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllVideos(params?: DataSearchParams) {
    const defaultParams: DataSearchParams = {sortByProperty: 'title'}
    params = Object.assign({}, defaultParams, params)
    const url = getApiRequestUrl(DataNodeType.VIDEO, params)
    const apiData: ApiVideoNode[] = (await requestDataFromApi(url))?.data || []
    const data: VideoNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as VideoNode)
    })

    return data
}
