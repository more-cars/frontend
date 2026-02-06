import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import type {ApiCarModelHasVariantRelationship} from "./types/ApiCarModelHasVariantRelationship"
import type {CarModelHasVariantRelationship} from "./types/CarModelHasVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedCarModelVariants(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/has-variant`)).data as ApiCarModelHasVariantRelationship[]
    const data: CarModelHasVariantRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_HAS_VARIANT,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.CAR_MODEL_VARIANT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
