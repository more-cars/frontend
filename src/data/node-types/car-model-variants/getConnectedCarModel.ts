import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelVariantIsVariantOfRelationship} from "./types/ApiCarModelVariantIsVariantOfRelationship"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {CarModelVariantIsVariantOfRelationship} from "./types/CarModelVariantIsVariantOfRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {CarModelNode} from "../car-models/types/CarModelNode"

export async function getConnectedCarModel(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/is-variant-of`)) as ApiCarModelVariantIsVariantOfRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: CarModelVariantIsVariantOfRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.CAR_MODEL_VARIANT_IS_VARIANT_OF,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as CarModelNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
