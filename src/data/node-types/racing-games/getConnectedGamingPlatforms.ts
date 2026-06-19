import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingGameById} from "./getRacingGameById"
import type {ApiRacingGameReleasedOnGamingPlatformRelationship} from "./types/ApiRacingGameReleasedOnGamingPlatformRelationship"
import type {RacingGameReleasedOnGamingPlatformRelationship} from "./types/RacingGameReleasedOnGamingPlatformRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {GamingPlatformNode} from "../gaming-platforms/types/GamingPlatformNode"

export async function getConnectedGamingPlatforms(id: number) {
    const sourceNode = await getRacingGameById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-games/${id}/released-on-gaming-platform`)) as ApiRacingGameReleasedOnGamingPlatformRelationship
    const data: RacingGameReleasedOnGamingPlatformRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.RACING_GAME_RELEASED_ON_GAMING_PLATFORM,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as GamingPlatformNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
