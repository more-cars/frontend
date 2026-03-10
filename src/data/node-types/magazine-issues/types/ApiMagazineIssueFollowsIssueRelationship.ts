import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiMagazineIssueNode} from "./ApiMagazineIssueNode"

export type ApiMagazineIssueFollowsIssueRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'follows-issue'
        partner_node: {
            node_type: ApiNodeType.MAGAZINE_ISSUE
            data: ApiMagazineIssueNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
