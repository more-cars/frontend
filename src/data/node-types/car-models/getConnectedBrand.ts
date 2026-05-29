import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelBelongsToBrandRelationship} from "./types/ApiCarModelBelongsToBrandRelationship"
import {getCarModelById} from "./getCarModelById"
import type {CarModelBelongsToBrandRelationship} from "./types/CarModelBelongsToBrandRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.CAR_MODEL_BELONGS_TO_BRAND,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as BrandNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
