import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingGameById} from "./getRacingGameById"
import type {ApiRacingGameHasImageRelationship} from "./types/ApiRacingGameHasImageRelationship"
import type {RacingGameHasImageRelationship} from "./types/RacingGameHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getRacingGameById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-games/${id}/has-image`)).data as ApiRacingGameHasImageRelationship[]
    const data: RacingGameHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACING_GAME_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_GAME,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
