import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiSessionResultBelongsToRacingSessionRelationship} from "./types/ApiSessionResultBelongsToRacingSessionRelationship"
import {getSessionResultById} from "./getSessionResultById"
import type {SessionResultBelongsToRacingSessionRelationship} from "./types/SessionResultBelongsToRacingSessionRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RacingSessionNode} from "../racing-sessions/types/RacingSessionNode"

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
        id: apiData.data.relationship_id,
        name: DataRelationshipType.SESSION_RESULT_BELONGS_TO_RACING_SESSION,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as RacingSessionNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
