import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventFollowsEventRelationship} from "./types/ApiRacingEventFollowsEventRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventFollowsEventRelationship} from "./types/RacingEventFollowsEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RacingEventNode} from "./types/RacingEventNode"

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
        id: apiData.data.relationship_id,
        name: DataRelationshipType.RACING_EVENT_FOLLOWS_EVENT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as RacingEventNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
