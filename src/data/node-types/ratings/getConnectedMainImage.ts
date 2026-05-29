import {requestDataFromApi} from "../../requestDataFromApi"
import {getRatingById} from "./getRatingById"
import type {ApiRatingHasPrimeImageRelationship} from "./types/ApiRatingHasPrimeImageRelationship"
import type {RatingHasMainImageRelationship} from "./types/RatingHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.RATING_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as ImageNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return relationship
}
