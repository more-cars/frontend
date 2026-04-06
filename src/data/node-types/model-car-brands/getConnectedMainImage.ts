import {requestDataFromApi} from "../../requestDataFromApi"
import {getModelCarBrandById} from "./getModelCarBrandById"
import type {ApiModelCarBrandHasPrimeImageRelationship} from "./types/ApiModelCarBrandHasPrimeImageRelationship"
import type {ModelCarBrandHasMainImageRelationship} from "./types/ModelCarBrandHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getModelCarBrandById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/model-car-brands/${id}/has-prime-image`)) as ApiModelCarBrandHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: ModelCarBrandHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.MODEL_CAR_BRAND_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.MODEL_CAR_BRAND,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
