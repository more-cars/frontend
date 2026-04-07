import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {RatingNode} from "../../ratings/types/RatingNode"

export type MagazineIssueReviewedCarModelVariantWithRatingRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_REVIEWED_CAR_MODEL_VARIANT_WITH_RATING
    source_node: MagazineIssueNode
    partner_node: RatingNode
    created_at: string
    updated_at: string
}
