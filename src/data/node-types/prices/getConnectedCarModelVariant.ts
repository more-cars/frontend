import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiPriceForCarModelVariantRelationship} from "./types/ApiPriceForCarModelVariantRelationship"
import {getPriceById} from "./getPriceById"
import type {PriceForCarModelVariantRelationship} from "./types/PriceForCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
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
        id,
        name: DataRelationshipType.PRICE_FOR_CAR_MODEL_VARIANT,
        source_node: sourceNode,
        source_node_type: DataNodeType.PRICE,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node.data) as CarModelVariantNode,
        partner_node_type: DataNodeType.CAR_MODEL_VARIANT,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
