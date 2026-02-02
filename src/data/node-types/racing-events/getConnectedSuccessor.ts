import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventIsFollowedByEventRelationship} from "./types/ApiRacingEventIsFollowedByEventRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventIsFollowedByEventRelationship} from "./types/RacingEventIsFollowedByEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedSuccessor(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/is-followed-by-event`)) as ApiRacingEventIsFollowedByEventRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RacingEventIsFollowedByEventRelationship = {
        id,
        name: DataRelationshipType.RACING_EVENT_IS_FOLLOWED_BY_EVENT,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_EVENT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.RACING_EVENT,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
