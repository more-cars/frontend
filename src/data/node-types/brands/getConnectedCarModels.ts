import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBrandHasCarModelRelationship} from "./types/ApiBrandHasCarModelRelationship"
import type {BrandHasCarModelRelationship} from "./types/BrandHasCarModelRelationship"
import {getBrandById} from "./getBrandById"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedCarModels(id: number) {
    const apiData = (await requestDataFromApi(`/brands/${id}/has-car-model`)).data as ApiBrandHasCarModelRelationship[]
    const data: BrandHasCarModelRelationship[] = []
    const sourceNode = await getBrandById(id)

    if (!sourceNode) {
        return []
    }

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.BRAND_HAS_CAR_MODEL,
            source_node: sourceNode,
            source_node_type: DataNodeType.BRAND,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.CAR_MODEL,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
