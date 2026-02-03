import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingEventById} from "./getRacingEventById"
import type {ApiRacingEventHasRacingSessionRelationship} from "./types/ApiRacingEventHasRacingSessionRelationship"
import type {RacingEventHasRacingSessionRelationship} from "./types/RacingEventHasRacingSessionRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedRacingSessions(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/has-racing-session`)).data as ApiRacingEventHasRacingSessionRelationship[]
    const data: RacingEventHasRacingSessionRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.RACING_EVENT_HAS_RACING_SESSION,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_EVENT,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.RACING_SESSION,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
