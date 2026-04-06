import {requestDataFromApi} from "../../requestDataFromApi"
import {getRatingById} from "./getRatingById"
import type {ApiRatingHasPrimeImageRelationship} from "./types/ApiRatingHasPrimeImageRelationship"
import type {RatingHasMainImageRelationship} from "./types/RatingHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getRatingById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/ratings/${id}/has-prime-image`)) as ApiRatingHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: RatingHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.RATING_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RATING,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
