import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRatingNode} from "../../ratings/types/ApiRatingNode"

export type ApiCarModelVariantReviewedByMagazineIssueWithRatingRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.CAR_MODEL_VARIANT_REVIEWED_BY_MAGAZINE_ISSUE_WITH_RATING
        partner_node: {
            node_type: ApiNodeType.RATING
            data: ApiRatingNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
