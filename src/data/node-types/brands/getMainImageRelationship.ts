import {requestDataFromApi} from "../../requestDataFromApi"
import {getBrandById} from "./getBrandById"
import type {ApiBrandHasPrimeImageRelationship} from "./types/ApiBrandHasPrimeImageRelationship"
import type {BrandHasMainImageRelationship} from "./types/BrandHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getMainImageRelationship(id: number) {
    const apiData = (await requestDataFromApi(`/brands/${id}/has-prime-image`)) as ApiBrandHasPrimeImageRelationship
    const sourceNode = await getBrandById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: BrandHasMainImageRelationship = {
        id,
        name: DataRelationshipType.BRAND_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.BRAND,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
