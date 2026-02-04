import {requestDataFromApi} from "../../requestDataFromApi"
import {getSessionResultById} from "./getSessionResultById"
import type {ApiSessionResultHasImageRelationship} from "./types/ApiSessionResultHasImageRelationship"
import type {SessionResultHasImageRelationship} from "./types/SessionResultHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedImages(id: number) {
    const sourceNode = await getSessionResultById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/session-results/${id}/has-image`)).data as ApiSessionResultHasImageRelationship[]
    const data: SessionResultHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.SESSION_RESULT_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.SESSION_RESULT,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
