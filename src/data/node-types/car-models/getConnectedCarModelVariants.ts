import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import type {ApiCarModelHasVariantRelationship} from "./types/ApiCarModelHasVariantRelationship"
import type {CarModelHasVariantRelationship} from "./types/CarModelHasVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariants(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/has-variant`)).data as ApiCarModelHasVariantRelationship[]
    const data: CarModelHasVariantRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.CAR_MODEL_HAS_VARIANT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as CarModelVariantNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
