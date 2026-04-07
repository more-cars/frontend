import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBrandHasCarModelRelationship} from "./types/ApiBrandHasCarModelRelationship"
import type {BrandHasCarModelRelationship} from "./types/BrandHasCarModelRelationship"
import {getBrandById} from "./getBrandById"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import type {CarModelNode} from "../car-models/types/CarModelNode"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"

export async function getConnectedCarModels(id: number) {
    const sourceNode = await getBrandById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/brands/${id}/has-car-model`)).data as ApiBrandHasCarModelRelationship[]
    const data: BrandHasCarModelRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.BRAND_HAS_CAR_MODEL,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as CarModelNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
