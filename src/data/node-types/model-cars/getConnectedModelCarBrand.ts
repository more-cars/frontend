import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiModelCarMadeByModelCarBrandRelationship} from "./types/ApiModelCarMadeByModelCarBrandRelationship"
import {getModelCarById} from "./getModelCarById"
import type {ModelCarMadeByModelCarBrandRelationship} from "./types/ModelCarMadeByModelCarBrandRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.MODEL_CAR_MADE_BY_MODEL_CAR_BRAND,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as ModelCarBrandNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
