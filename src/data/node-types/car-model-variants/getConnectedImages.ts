import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantHasImageRelationship} from "./types/ApiCarModelVariantHasImageRelationship"
import type {CarModelVariantHasImageRelationship} from "./types/CarModelVariantHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedImages(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/has-image`)).data as ApiCarModelVariantHasImageRelationship[]
    const data: CarModelVariantHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL_VARIANT,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
