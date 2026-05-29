import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiMagazineIssueNode} from "./ApiMagazineIssueNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiMagazineIssueFollowedByIssueRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.MAGAZINE_ISSUE
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.MAGAZINE_ISSUE_FOLLOWED_BY_ISSUE
            partner_node: {
                node_type: ApiNodeType.MAGAZINE_ISSUE
                data: ApiMagazineIssueNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
