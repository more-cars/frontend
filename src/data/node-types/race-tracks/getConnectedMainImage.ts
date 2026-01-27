import {requestDataFromApi} from "../../requestDataFromApi"
import {getRaceTrackById} from "./getRaceTrackById"
import type {ApiRaceTrackHasPrimeImageRelationship} from "./types/ApiRaceTrackHasPrimeImageRelationship"
import type {RaceTrackHasMainImageRelationship} from "./types/RaceTrackHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedMainImage(id: number) {
    const apiData = (await requestDataFromApi(`/race-tracks/${id}/has-prime-image`)) as ApiRaceTrackHasPrimeImageRelationship
    const sourceNode = await getRaceTrackById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: RaceTrackHasMainImageRelationship = {
        id,
        name: DataRelationshipType.RACE_TRACK_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACE_TRACK,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
