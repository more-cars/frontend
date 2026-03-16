import {RatingNode} from "../../../data/node-types/ratings/types/RatingNode"
import {Rating} from "./types/Rating"

export function convertRatingNode(dataNode: RatingNode) {
    const rating: Rating = {
        id: dataNode.id,
        rating_value: dataNode.rating_value,
        scale_minimum: dataNode.scale_minimum,
        scale_maximum: dataNode.scale_maximum,
        scale_direction: dataNode.scale_direction,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return rating
}
