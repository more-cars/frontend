import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelBelongsToBrandRelationship} from "./types/ApiCarModelBelongsToBrandRelationship"
import {getCarModelById} from "./getCarModelById"
import type {CarModelBelongsToBrandRelationship} from "./types/CarModelBelongsToBrandRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {BrandNode} from "../brands/types/BrandNode"

export async function getConnectedBrand(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/belongs-to-brand`)) as ApiCarModelBelongsToBrandRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: CarModelBelongsToBrandRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.CAR_MODEL_BELONGS_TO_BRAND,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as BrandNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
