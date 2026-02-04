import {requestDataFromApi} from "../../requestDataFromApi"
import type {
    ApiSessionResultBelongsToRacingSessionRelationship
} from "./types/ApiSessionResultBelongsToRacingSessionRelationship"
import {getSessionResultById} from "./getSessionResultById"
import type {
    SessionResultBelongsToRacingSessionRelationship
} from "./types/SessionResultBelongsToRacingSessionRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedRacingSession(id: number) {
    const sourceNode = await getSessionResultById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/session-results/${id}/belongs-to-racing-session`)) as ApiSessionResultBelongsToRacingSessionRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: SessionResultBelongsToRacingSessionRelationship = {
        id,
        name: DataRelationshipType.SESSION_RESULT_BELONGS_TO_RACING_SESSION,
        source_node: sourceNode,
        source_node_type: DataNodeType.SESSION_RESULT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.RACING_SESSION,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
