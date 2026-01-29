import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutHasImageRelationship} from "./types/ApiTrackLayoutHasImageRelationship"
import type {TrackLayoutHasImageRelationship} from "./types/TrackLayoutHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedImages(id: number) {
    const sourceNode = await getTrackLayoutById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/track-layouts/${id}/has-image`)).data as ApiTrackLayoutHasImageRelationship[]
    const data: TrackLayoutHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.TRACK_LAYOUT_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.TRACK_LAYOUT,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
