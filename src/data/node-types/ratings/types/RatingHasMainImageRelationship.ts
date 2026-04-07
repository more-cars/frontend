import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RatingNode} from "./RatingNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type RatingHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.RATING_HAS_MAIN_IMAGE
    source_node: RatingNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
