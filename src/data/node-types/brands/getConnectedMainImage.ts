import {requestDataFromApi} from "../../requestDataFromApi"
import {getBrandById} from "./getBrandById"
import type {ApiBrandHasPrimeImageRelationship} from "./types/ApiBrandHasPrimeImageRelationship"
import type {BrandHasMainImageRelationship} from "./types/BrandHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getBrandById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/brands/${id}/has-prime-image`)) as ApiBrandHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: BrandHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.BRAND_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
