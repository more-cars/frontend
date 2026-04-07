import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingEventById} from "./getRacingEventById"
import type {ApiRacingEventHasRacingSessionRelationship} from "./types/ApiRacingEventHasRacingSessionRelationship"
import type {RacingEventHasRacingSessionRelationship} from "./types/RacingEventHasRacingSessionRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RacingSessionNode} from "../racing-sessions/types/RacingSessionNode"

export async function getConnectedRacingSessions(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/has-racing-session`)).data as ApiRacingEventHasRacingSessionRelationship[]
    const data: RacingEventHasRacingSessionRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACING_EVENT_HAS_RACING_SESSION,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as RacingSessionNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
