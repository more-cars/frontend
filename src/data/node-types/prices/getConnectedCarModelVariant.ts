import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiPriceForCarModelVariantRelationship} from "./types/ApiPriceForCarModelVariantRelationship"
import {getPriceById} from "./getPriceById"
import type {PriceForCarModelVariantRelationship} from "./types/PriceForCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariant(id: number) {
    const sourceNode = await getPriceById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/prices/${id}/for-car-model-variant`)) as ApiPriceForCarModelVariantRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: PriceForCarModelVariantRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.PRICE_FOR_CAR_MODEL_VARIANT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as CarModelVariantNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
