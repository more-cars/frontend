import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantHasPriceRelationship} from "./types/ApiCarModelVariantHasPriceRelationship"
import type {CarModelVariantHasPriceRelationship} from "./types/CarModelVariantHasPriceRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {PriceNode} from "../prices/types/PriceNode"

export async function getConnectedPrices(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/has-price`)).data as ApiCarModelVariantHasPriceRelationship[]
    const data: CarModelVariantHasPriceRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_PRICE,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL_VARIANT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as PriceNode,
            partner_node_type: DataNodeType.PRICE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
