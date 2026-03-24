import {RatingNode} from "../../../data/node-types/ratings/types/RatingNode"
import {Rating} from "./types/Rating"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertRatingNode(dataNode: RatingNode) {
    const rating: Rating = {
        type: ModelNodeType.RATING,
        fields: {
            id: dataNode.data.id,
            rating_value: dataNode.data.rating_value,
            scale_minimum: dataNode.data.scale_minimum,
            scale_maximum: dataNode.data.scale_maximum,
            scale_direction: dataNode.data.scale_direction,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return rating
}
