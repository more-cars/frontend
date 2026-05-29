import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRatingNode} from "../../ratings/types/ApiRatingNode"

export type ApiCarModelVariantReviewedByMagazineIssueWithRatingRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.CAR_MODEL_VARIANT
        id: number
        attributes: Record<string, string | number | boolean | null>
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
    }[]
}
