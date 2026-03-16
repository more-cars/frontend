import {requestDataFromApi} from "../../requestDataFromApi"
import {getRatingById} from "./getRatingById"
import type {ApiRatingHasImageRelationship} from "./types/ApiRatingHasImageRelationship"
import type {RatingHasImageRelationship} from "./types/RatingHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
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
            id,
            name: DataRelationshipType.RATING_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.RATING,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as ImageNode,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
