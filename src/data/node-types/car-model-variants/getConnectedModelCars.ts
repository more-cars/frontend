import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantHasScaleModelRelationship} from "./types/ApiCarModelVariantHasScaleModelRelationship"
import type {CarModelVariantHasScaleModelRelationship} from "./types/CarModelVariantHasScaleModelRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ModelCarNode} from "../model-cars/types/ModelCarNode"

export async function getConnectedModelCars(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/has-scale-model`)).data as ApiCarModelVariantHasScaleModelRelationship[]
    const data: CarModelVariantHasScaleModelRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_SCALE_MODEL,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL_VARIANT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ModelCarNode,
            partner_node_type: DataNodeType.MODEL_CAR,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
