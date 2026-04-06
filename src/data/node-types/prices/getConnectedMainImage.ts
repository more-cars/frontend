import {requestDataFromApi} from "../../requestDataFromApi"
import {getPriceById} from "./getPriceById"
import type {ApiPriceHasPrimeImageRelationship} from "./types/ApiPriceHasPrimeImageRelationship"
import type {PriceHasMainImageRelationship} from "./types/PriceHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getPriceById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/prices/${id}/has-prime-image`)) as ApiPriceHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: PriceHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.PRICE_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.PRICE,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
