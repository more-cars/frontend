import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventUsedTheTrackLayoutRelationship} from "./types/ApiRacingEventUsedTheTrackLayoutRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventUsedTheTrackLayoutRelationship} from "./types/RacingEventUsedTheTrackLayoutRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedTrackLayout(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/used-the-track-layout`)) as ApiRacingEventUsedTheTrackLayoutRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RacingEventUsedTheTrackLayoutRelationship = {
        id,
        name: DataRelationshipType.RACING_EVENT_USED_THE_TRACK_LAYOUT,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_EVENT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.TRACK_LAYOUT,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
