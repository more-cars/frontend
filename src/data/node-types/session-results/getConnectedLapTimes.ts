import {requestDataFromApi} from "../../requestDataFromApi"
import {getSessionResultById} from "./getSessionResultById"
import type {ApiSessionResultHasLapTimeRelationship} from "./types/ApiSessionResultHasLapTimeRelationship"
import type {SessionResultHasLapTimeRelationship} from "./types/SessionResultHasLapTimeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {LapTimeNode} from "../lap-times/types/LapTimeNode"

export async function getConnectedLapTimes(id: number) {
    const sourceNode = await getSessionResultById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/session-results/${id}/has-lap-time`)).data as ApiSessionResultHasLapTimeRelationship[]
    const data: SessionResultHasLapTimeRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.SESSION_RESULT_HAS_LAP_TIME,
            source_node: sourceNode,
            source_node_type: DataNodeType.SESSION_RESULT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as LapTimeNode,
            partner_node_type: DataNodeType.LAP_TIME,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
