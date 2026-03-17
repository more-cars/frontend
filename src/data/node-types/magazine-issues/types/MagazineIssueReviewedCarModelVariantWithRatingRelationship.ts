import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RatingNode} from "../../ratings/types/RatingNode"

export type MagazineIssueReviewedCarModelVariantWithRatingRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_REVIEWED_CAR_MODEL_VARIANT_WITH_RATING
    source_node: MagazineIssueNode
    source_node_type: DataNodeType.MAGAZINE_ISSUE
    partner_node: RatingNode
    partner_node_type: DataNodeType.RATING
    created_at: string
    updated_at: string
}
