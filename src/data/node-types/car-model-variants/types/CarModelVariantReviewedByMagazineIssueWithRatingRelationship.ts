import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RatingNode} from "../../ratings/types/RatingNode"

export type CarModelVariantReviewedByMagazineIssueWithRatingRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_REVIEWED_BY_MAGAZINE_ISSUE_WITH_RATING
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: RatingNode
    partner_node_type: DataNodeType.RATING
    created_at: string
    updated_at: string
}
