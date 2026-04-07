import {requestDataFromApi} from "../../requestDataFromApi"
import {getRatingById} from "./getRatingById"
import type {ApiRatingHasImageRelationship} from "./types/ApiRatingHasImageRelationship"
import type {RatingHasImageRelationship} from "./types/RatingHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getRatingById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/ratings/${id}/has-image`)).data as ApiRatingHasImageRelationship[]
    const data: RatingHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RATING_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
