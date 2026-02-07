import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiTrackLayoutNode} from "./types/ApiTrackLayoutNode"
import type {TrackLayoutNode} from "./types/TrackLayoutNode"

export async function getAllTrackLayouts(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.TRACK_LAYOUT, params)
    const apiData: ApiTrackLayoutNode[] = (await requestDataFromApi(url))?.data || []
    const data: TrackLayoutNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
