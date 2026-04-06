import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSessionById} from "./getRacingSessionById"
import type {ApiRacingSessionHasSessionResultRelationship} from "./types/ApiRacingSessionHasSessionResultRelationship"
import type {RacingSessionHasSessionResultRelationship} from "./types/RacingSessionHasSessionResultRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {SessionResultNode} from "../session-results/types/SessionResultNode"

export async function getConnectedSessionResults(id: number) {
    const sourceNode = await getRacingSessionById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-sessions/${id}/has-session-result`)).data as ApiRacingSessionHasSessionResultRelationship[]
    const data: RacingSessionHasSessionResultRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACING_SESSION_HAS_SESSION_RESULT,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_SESSION,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as SessionResultNode,
            partner_node_type: DataNodeType.SESSION_RESULT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
