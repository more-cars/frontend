import {requestDataFromApi} from "../../requestDataFromApi"
import {getGamingPlatformById} from "./getGamingPlatformById"
import type {ApiGamingPlatformHasVideoRelationship} from "./types/ApiGamingPlatformHasVideoRelationship"
import type {GamingPlatformHasVideoRelationship} from "./types/GamingPlatformHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getGamingPlatformById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/gaming-platforms/${id}/has-video`)).data as ApiGamingPlatformHasVideoRelationship[]
    const data: GamingPlatformHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.GAMING_PLATFORM_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.GAMING_PLATFORM,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
