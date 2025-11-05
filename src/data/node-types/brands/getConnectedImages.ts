import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBrandHasImageRelationship} from "./types/ApiBrandHasImageRelationship"
import type {BrandHasImageRelationship} from "./types/BrandHasImageRelationship"
import {getBrandById} from "./getBrandById"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedImages(id: number) {
    const apiData = (await requestDataFromApi(`/brands/${id}/has-image`)).data as ApiBrandHasImageRelationship[]
    const data: BrandHasImageRelationship[] = []
    const sourceNode = await getBrandById(id)

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.BRAND_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.BRAND,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
