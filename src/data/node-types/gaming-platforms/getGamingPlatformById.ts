import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiGamingPlatformNode} from "./types/ApiGamingPlatformNode"
import type {GamingPlatformNode} from "./types/GamingPlatformNode"

export async function getGamingPlatformById(id: number) {
    const apiData = (await requestDataFromApi(`/gaming-platforms/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiGamingPlatformNode) as GamingPlatformNode
}
