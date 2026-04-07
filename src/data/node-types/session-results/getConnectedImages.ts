import {requestDataFromApi} from "../../requestDataFromApi"
import {getSessionResultById} from "./getSessionResultById"
import type {ApiSessionResultHasImageRelationship} from "./types/ApiSessionResultHasImageRelationship"
import type {SessionResultHasImageRelationship} from "./types/SessionResultHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getSessionResultById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/session-results/${id}/has-image`)).data as ApiSessionResultHasImageRelationship[]
    const data: SessionResultHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.SESSION_RESULT_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
