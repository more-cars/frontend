import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiTrackLayoutNode} from "./types/ApiTrackLayoutNode"
import type {TrackLayoutNode} from "./types/TrackLayoutNode"

export async function getTrackLayoutById(id: number) {
    const apiData = (await requestDataFromApi(`/track-layouts/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiTrackLayoutNode) as TrackLayoutNode
}
