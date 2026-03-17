import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRatingNode} from "../../ratings/types/ApiRatingNode"

export type ApiMagazineIssueReviewedCarModelVariantWithRatingRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.MAGAZINE_ISSUE_REVIEWED_CAR_MODEL_VARIANT_WITH_RATING
        partner_node: {
            node_type: ApiNodeType.RATING
            data: ApiRatingNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
