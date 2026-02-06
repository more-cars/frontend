import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelVariantIsVariantOfRelationship} from "./types/ApiCarModelVariantIsVariantOfRelationship"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {CarModelVariantIsVariantOfRelationship} from "./types/CarModelVariantIsVariantOfRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

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
        id,
        name: DataRelationshipType.CAR_MODEL_VARIANT_IS_VARIANT_OF,
        source_node: sourceNode,
        source_node_type: DataNodeType.CAR_MODEL_VARIANT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.CAR_MODEL,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
