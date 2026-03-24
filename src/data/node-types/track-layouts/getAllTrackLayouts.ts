import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiTrackLayoutNode} from "./types/ApiTrackLayoutNode"
import type {TrackLayoutNode} from "./types/TrackLayoutNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllTrackLayouts(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.TRACK_LAYOUT, params)
    const apiData: ApiTrackLayoutNode[] = (await requestDataFromApi(url))?.data || []
    const data: TrackLayoutNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as TrackLayoutNode)
    })

    return data
}
