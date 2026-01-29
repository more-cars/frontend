import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutHasPrimeImageRelationship} from "./types/ApiTrackLayoutHasPrimeImageRelationship"
import type {TrackLayoutHasMainImageRelationship} from "./types/TrackLayoutHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedMainImage(id: number) {
    const apiData = (await requestDataFromApi(`/track-layouts/${id}/has-prime-image`)) as ApiTrackLayoutHasPrimeImageRelationship
    const sourceNode = await getTrackLayoutById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: TrackLayoutHasMainImageRelationship = {
        id,
        name: DataRelationshipType.TRACK_LAYOUT_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.TRACK_LAYOUT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
