import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiGamingPlatformNode} from "./types/ApiGamingPlatformNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {GamingPlatformNode} from "./types/GamingPlatformNode"

export async function getGamingPlatformById(id: number) {
    const apiData = (await requestDataFromApi(`/gaming-platforms/${id}`)) as ApiGamingPlatformNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as GamingPlatformNode
}
