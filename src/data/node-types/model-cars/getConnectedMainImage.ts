import {requestDataFromApi} from "../../requestDataFromApi"
import {getModelCarById} from "./getModelCarById"
import type {ApiModelCarHasPrimeImageRelationship} from "./types/ApiModelCarHasPrimeImageRelationship"
import type {ModelCarHasMainImageRelationship} from "./types/ModelCarHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getModelCarById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/model-cars/${id}/has-prime-image`)) as ApiModelCarHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: ModelCarHasMainImageRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.MODEL_CAR_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as ImageNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return relationship
}
