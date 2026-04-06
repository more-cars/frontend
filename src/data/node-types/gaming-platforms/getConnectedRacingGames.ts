import {requestDataFromApi} from "../../requestDataFromApi"
import {getGamingPlatformById} from "./getGamingPlatformById"
import type {ApiGamingPlatformFeaturesRacingGameRelationship} from "./types/ApiGamingPlatformFeaturesRacingGameRelationship"
import type {GamingPlatformFeaturesRacingGameRelationship} from "./types/GamingPlatformFeaturesRacingGameRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RacingGameNode} from "../racing-games/types/RacingGameNode"

export async function getConnectedRacingGames(id: number) {
    const sourceNode = await getGamingPlatformById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/gaming-platforms/${id}/features-racing-game`)).data as ApiGamingPlatformFeaturesRacingGameRelationship[]
    const data: GamingPlatformFeaturesRacingGameRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.GAMING_PLATFORM_FEATURES_RACING_GAME,
            source_node: sourceNode,
            source_node_type: DataNodeType.GAMING_PLATFORM,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as RacingGameNode,
            partner_node_type: DataNodeType.RACING_GAME,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
