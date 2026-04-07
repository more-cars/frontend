import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutWasUsedByRacingEventRelationship} from "./types/ApiTrackLayoutWasUsedByRacingEventRelationship"
import type {TrackLayoutWasUsedByRacingEventRelationship} from "./types/TrackLayoutWasUsedByRacingEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RacingEventNode} from "../racing-events/types/RacingEventNode"

export async function getConnectedRacingEvents(id: number) {
    const sourceNode = await getTrackLayoutById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/track-layouts/${id}/was-used-by-racing-event`)).data as ApiTrackLayoutWasUsedByRacingEventRelationship[]
    const data: TrackLayoutWasUsedByRacingEventRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.TRACK_LAYOUT_WAS_USED_BY_RACING_EVENT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as RacingEventNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
