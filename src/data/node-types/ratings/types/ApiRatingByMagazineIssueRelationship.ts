import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiMagazineIssueNode} from "../../magazine-issues/types/ApiMagazineIssueNode"

export type ApiRatingByMagazineIssueRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.RATING
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.RATING_BY_MAGAZINE_ISSUE
            partner_node: {
                node_type: ApiNodeType.MAGAZINE_ISSUE
                data: ApiMagazineIssueNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
