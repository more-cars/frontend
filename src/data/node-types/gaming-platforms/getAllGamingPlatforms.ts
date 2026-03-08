import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiGamingPlatformNode} from "./types/ApiGamingPlatformNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {GamingPlatformNode} from "./types/GamingPlatformNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllGamingPlatforms(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.GAMING_PLATFORM, params)
    const apiData: ApiGamingPlatformNode[] = (await requestDataFromApi(url))?.data || []
    const data: GamingPlatformNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem.attributes, apiItem.id) as GamingPlatformNode)
    })

    return data
}
