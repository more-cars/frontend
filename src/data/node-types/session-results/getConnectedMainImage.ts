import {requestDataFromApi} from "../../requestDataFromApi"
import {getSessionResultById} from "./getSessionResultById"
import type {ApiSessionResultHasPrimeImageRelationship} from "./types/ApiSessionResultHasPrimeImageRelationship"
import type {SessionResultHasMainImageRelationship} from "./types/SessionResultHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getSessionResultById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/session-results/${id}/has-prime-image`)) as ApiSessionResultHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: SessionResultHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.SESSION_RESULT_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.SESSION_RESULT,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
