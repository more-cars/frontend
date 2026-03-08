import {requestDataFromApi} from "../../requestDataFromApi"
import {getGamingPlatformById} from "./getGamingPlatformById"
import type {ApiGamingPlatformHasImageRelationship} from "./types/ApiGamingPlatformHasImageRelationship"
import type {GamingPlatformHasImageRelationship} from "./types/GamingPlatformHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getGamingPlatformById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/gaming-platforms/${id}/has-image`)).data as ApiGamingPlatformHasImageRelationship[]
    const data: GamingPlatformHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.GAMING_PLATFORM_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.GAMING_PLATFORM,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as ImageNode,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
