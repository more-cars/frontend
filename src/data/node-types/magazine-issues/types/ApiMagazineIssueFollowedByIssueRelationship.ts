import type {ApiMagazineIssueNode} from "../../magazine-issues/types/ApiMagazineIssueNode"

export type ApiMagazineIssueFollowedByIssueRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'followed-by-issue'
        partner_node: {
            node_type: 'magazine-issues'
            data: ApiMagazineIssueNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
