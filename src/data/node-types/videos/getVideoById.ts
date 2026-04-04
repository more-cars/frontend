import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiVideoNode} from "./types/ApiVideoNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {VideoNode} from "./types/VideoNode"

export async function getVideoById(id: number) {
    const apiData = (await requestDataFromApi(`/videos/${id}`)) as ApiVideoNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as VideoNode
}
