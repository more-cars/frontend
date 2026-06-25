import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiVideoNode} from "./types/ApiVideoNode"
import type {VideoNode} from "./types/VideoNode"

export async function getVideoById(id: number) {
    const apiData = (await requestDataFromApi(`/videos/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiVideoNode) as VideoNode
}
