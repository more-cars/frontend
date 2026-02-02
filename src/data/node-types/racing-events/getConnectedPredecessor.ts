import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventFollowsEventRelationship} from "./types/ApiRacingEventFollowsEventRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventFollowsEventRelationship} from "./types/RacingEventFollowsEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedPredecessor(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/follows-event`)) as ApiRacingEventFollowsEventRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RacingEventFollowsEventRelationship = {
        id,
        name: DataRelationshipType.RACING_EVENT_FOLLOWS_EVENT,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_EVENT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.RACING_EVENT,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
