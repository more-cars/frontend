import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiModelCarMadeByModelCarBrandRelationship} from "./types/ApiModelCarMadeByModelCarBrandRelationship"
import {getModelCarById} from "./getModelCarById"
import type {ModelCarMadeByModelCarBrandRelationship} from "./types/ModelCarMadeByModelCarBrandRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ModelCarBrandNode} from "../model-car-brands/types/ModelCarBrandNode"

export async function getConnectedModelCarBrand(id: number) {
    const sourceNode = await getModelCarById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/model-cars/${id}/made-by-model-car-brand`)) as ApiModelCarMadeByModelCarBrandRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: ModelCarMadeByModelCarBrandRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.MODEL_CAR_MADE_BY_MODEL_CAR_BRAND,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ModelCarBrandNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
