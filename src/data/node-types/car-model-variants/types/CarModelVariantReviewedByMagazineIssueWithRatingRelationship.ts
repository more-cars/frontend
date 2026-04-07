import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {RatingNode} from "../../ratings/types/RatingNode"

export type CarModelVariantReviewedByMagazineIssueWithRatingRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_REVIEWED_BY_MAGAZINE_ISSUE_WITH_RATING
    source_node: CarModelVariantNode
    partner_node: RatingNode
    created_at: string
    updated_at: string
}
