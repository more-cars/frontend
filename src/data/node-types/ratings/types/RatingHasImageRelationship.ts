import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RatingNode} from "./RatingNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type RatingHasImageRelationship = {
    id: number
    name: DataRelationshipType.RATING_HAS_IMAGE
    source_node: RatingNode
    source_node_type: DataNodeType.RATING
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
