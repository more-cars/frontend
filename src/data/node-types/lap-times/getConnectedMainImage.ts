import {requestDataFromApi} from "../../requestDataFromApi"
import {getLapTimeById} from "./getLapTimeById"
import type {ApiLapTimeHasPrimeImageRelationship} from "./types/ApiLapTimeHasPrimeImageRelationship"
import type {LapTimeHasMainImageRelationship} from "./types/LapTimeHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedMainImage(id: number) {
    const apiData = (await requestDataFromApi(`/lap-times/${id}/has-prime-image`)) as ApiLapTimeHasPrimeImageRelationship
    const sourceNode = await getLapTimeById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: LapTimeHasMainImageRelationship = {
        id,
        name: DataRelationshipType.LAP_TIME_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.LAP_TIME,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
