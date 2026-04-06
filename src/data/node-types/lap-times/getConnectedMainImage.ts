import {requestDataFromApi} from "../../requestDataFromApi"
import {getLapTimeById} from "./getLapTimeById"
import type {ApiLapTimeHasPrimeImageRelationship} from "./types/ApiLapTimeHasPrimeImageRelationship"
import type {LapTimeHasMainImageRelationship} from "./types/LapTimeHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getLapTimeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/lap-times/${id}/has-prime-image`)) as ApiLapTimeHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: LapTimeHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.LAP_TIME_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.LAP_TIME,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
