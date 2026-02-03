import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSessionBelongsToRacingEventRelationship} from "./types/ApiRacingSessionBelongsToRacingEventRelationship"
import {getRacingSessionById} from "./getRacingSessionById"
import type {RacingSessionBelongsToRacingEventRelationship} from "./types/RacingSessionBelongsToRacingEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedRacingEvent(id: number) {
    const sourceNode = await getRacingSessionById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-sessions/${id}/belongs-to-racing-event`)) as ApiRacingSessionBelongsToRacingEventRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RacingSessionBelongsToRacingEventRelationship = {
        id,
        name: DataRelationshipType.RACING_SESSION_BELONGS_TO_RACING_EVENT,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_SESSION,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.RACING_EVENT,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
