import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutWasUsedByRacingEventRelationship} from "./types/ApiTrackLayoutWasUsedByRacingEventRelationship"
import type {TrackLayoutWasUsedByRacingEventRelationship} from "./types/TrackLayoutWasUsedByRacingEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedRacingEvents(id: number) {
    const sourceNode = await getTrackLayoutById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/track-layouts/${id}/was-used-by-racing-event`)).data as ApiTrackLayoutWasUsedByRacingEventRelationship[]
    const data: TrackLayoutWasUsedByRacingEventRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.TRACK_LAYOUT_WAS_USED_BY_RACING_EVENT,
            source_node: sourceNode,
            source_node_type: DataNodeType.TRACK_LAYOUT,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.RACING_EVENT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
