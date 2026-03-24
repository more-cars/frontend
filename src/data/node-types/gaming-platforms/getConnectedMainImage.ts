import {requestDataFromApi} from "../../requestDataFromApi"
import {getGamingPlatformById} from "./getGamingPlatformById"
import type {ApiGamingPlatformHasPrimeImageRelationship} from "./types/ApiGamingPlatformHasPrimeImageRelationship"
import type {GamingPlatformHasMainImageRelationship} from "./types/GamingPlatformHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getGamingPlatformById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/gaming-platforms/${id}/has-prime-image`)) as ApiGamingPlatformHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: GamingPlatformHasMainImageRelationship = {
        id,
        name: DataRelationshipType.GAMING_PLATFORM_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.GAMING_PLATFORM,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
