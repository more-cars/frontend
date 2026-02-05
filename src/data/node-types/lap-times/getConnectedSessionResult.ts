import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeBelongsToSessionResultRelationship} from "./types/ApiLapTimeBelongsToSessionResultRelationship"
import {getLapTimeById} from "./getLapTimeById"
import type {LapTimeBelongsToSessionResultRelationship} from "./types/LapTimeBelongsToSessionResultRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

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
        id,
        name: DataRelationshipType.LAP_TIME_BELONGS_TO_SESSION_RESULT,
        source_node: sourceNode,
        source_node_type: DataNodeType.LAP_TIME,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.SESSION_RESULT,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
