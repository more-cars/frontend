import type {Rating} from "./types/Rating"
import {formatRating} from "../../../controllers/lib/formatRating"

export function getNodeTitle(node: Rating) {
    return formatRating(node.fields.rating_value, node.fields.scale_maximum)
}
