import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSeriesById} from "./getRacingSeriesById"
import type {ApiRacingSeriesHasPrimeImageRelationship} from "./types/ApiRacingSeriesHasPrimeImageRelationship"
import type {RacingSeriesHasMainImageRelationship} from "./types/RacingSeriesHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedMainImage(id: number) {
    const apiData = (await requestDataFromApi(`/racing-series/${id}/has-prime-image`)) as ApiRacingSeriesHasPrimeImageRelationship
    const sourceNode = await getRacingSeriesById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: RacingSeriesHasMainImageRelationship = {
        id,
        name: DataRelationshipType.RACING_SERIES_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_SERIES,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
