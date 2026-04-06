import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSessionById} from "./getRacingSessionById"
import type {ApiRacingSessionHasPrimeImageRelationship} from "./types/ApiRacingSessionHasPrimeImageRelationship"
import type {RacingSessionHasMainImageRelationship} from "./types/RacingSessionHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getRacingSessionById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-sessions/${id}/has-prime-image`)) as ApiRacingSessionHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: RacingSessionHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.RACING_SESSION_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_SESSION,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
