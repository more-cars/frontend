import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiTrackLayoutNode} from "./types/ApiTrackLayoutNode"
import type {TrackLayoutNode} from "./types/TrackLayoutNode"

export async function getTrackLayoutById(id: number) {
    const apiData = (await requestDataFromApi(`/track-layouts/${id}`)) as ApiTrackLayoutNode

    if (!apiData) {
        return null
    }

    return apiData.data as TrackLayoutNode
}
