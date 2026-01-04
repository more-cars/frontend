import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelBelongsToBrandRelationship} from "./types/ApiCarModelBelongsToBrandRelationship"
import {getCarModelById} from "./getCarModelById"
import type {CarModelBelongsToBrandRelationship} from "./types/CarModelBelongsToBrandRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedBrand(id: number) {
    const apiData = (await requestDataFromApi(`/car-models/${id}/belongs-to-brand`)) as ApiCarModelBelongsToBrandRelationship
    const sourceNode = await getCarModelById(id)

    if (!apiData) {
        return
    }
    const data: CarModelBelongsToBrandRelationship = {
        id,
        name: DataRelationshipType.CAR_MODEL_BELONGS_TO_BRAND,
        source_node: sourceNode,
        source_node_type: DataNodeType.CAR_MODEL,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.BRAND,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
