import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventUsedTheTrackLayoutRelationship} from "./types/ApiRacingEventUsedTheTrackLayoutRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventUsedTheTrackLayoutRelationship} from "./types/RacingEventUsedTheTrackLayoutRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {TrackLayoutNode} from "../track-layouts/types/TrackLayoutNode"

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
        id: apiData.data.relationship_id,
        name: DataRelationshipType.RACING_EVENT_USED_THE_TRACK_LAYOUT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as TrackLayoutNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
