import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingEventById} from "./getRacingEventById"
import type {ApiRacingEventHasPrimeImageRelationship} from "./types/ApiRacingEventHasPrimeImageRelationship"
import type {RacingEventHasMainImageRelationship} from "./types/RacingEventHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedMainImage(id: number) {
    const apiData = (await requestDataFromApi(`/racing-events/${id}/has-prime-image`)) as ApiRacingEventHasPrimeImageRelationship
    const sourceNode = await getRacingEventById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: RacingEventHasMainImageRelationship = {
        id,
        name: DataRelationshipType.RACING_EVENT_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_EVENT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
