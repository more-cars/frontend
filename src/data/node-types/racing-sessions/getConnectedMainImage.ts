import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSessionById} from "./getRacingSessionById"
import type {ApiRacingSessionHasPrimeImageRelationship} from "./types/ApiRacingSessionHasPrimeImageRelationship"
import type {RacingSessionHasMainImageRelationship} from "./types/RacingSessionHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedMainImage(id: number) {
    const apiData = (await requestDataFromApi(`/racing-sessions/${id}/has-prime-image`)) as ApiRacingSessionHasPrimeImageRelationship
    const sourceNode = await getRacingSessionById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: RacingSessionHasMainImageRelationship = {
        id,
        name: DataRelationshipType.RACING_SESSION_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_SESSION,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
