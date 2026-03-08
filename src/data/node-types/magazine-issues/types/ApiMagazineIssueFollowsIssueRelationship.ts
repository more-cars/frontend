import type {ApiMagazineIssueNode} from "../../magazine-issues/types/ApiMagazineIssueNode"

export type ApiMagazineIssueFollowsIssueRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'follows-issue'
        partner_node: {
            node_type: 'magazine-issues'
            data: ApiMagazineIssueNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
