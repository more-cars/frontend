import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeBelongsToSessionResultRelationship} from "./types/ApiLapTimeBelongsToSessionResultRelationship"
import {getLapTimeById} from "./getLapTimeById"
import type {LapTimeBelongsToSessionResultRelationship} from "./types/LapTimeBelongsToSessionResultRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {SessionResultNode} from "../session-results/types/SessionResultNode"

export async function getConnectedSessionResult(id: number) {
    const sourceNode = await getLapTimeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/lap-times/${id}/belongs-to-session-result`)) as ApiLapTimeBelongsToSessionResultRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: LapTimeBelongsToSessionResultRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.LAP_TIME_BELONGS_TO_SESSION_RESULT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as SessionResultNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
