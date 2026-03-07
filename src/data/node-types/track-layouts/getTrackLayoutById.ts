import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiTrackLayoutNode} from "./types/ApiTrackLayoutNode"
import type {TrackLayoutNode} from "./types/TrackLayoutNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getTrackLayoutById(id: number) {
    const apiData = (await requestDataFromApi(`/track-layouts/${id}`)) as ApiTrackLayoutNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData.attributes, apiData.id) as TrackLayoutNode
}
