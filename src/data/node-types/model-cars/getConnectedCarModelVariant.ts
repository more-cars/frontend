import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiModelCarIsScaleModelOfCarModelVariantRelationship} from "./types/ApiModelCarIsScaleModelOfCarModelVariantRelationship"
import {getModelCarById} from "./getModelCarById"
import type {ModelCarIsScaleModelOfCarModelVariantRelationship} from "./types/ModelCarIsScaleModelOfCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariant(id: number) {
    const sourceNode = await getModelCarById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/model-cars/${id}/is-scale-model-of-car-model-variant`)) as ApiModelCarIsScaleModelOfCarModelVariantRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: ModelCarIsScaleModelOfCarModelVariantRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.MODEL_CAR_IS_SCALE_MODEL_OF_CAR_MODEL_VARIANT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as CarModelVariantNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
