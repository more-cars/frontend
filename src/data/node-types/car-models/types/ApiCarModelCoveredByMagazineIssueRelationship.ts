import type {ApiMagazineIssueNode} from "../../magazine-issues/types/ApiMagazineIssueNode"

export type ApiCarModelCoveredByMagazineIssueRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'covered-by-magazine-issue'
        partner_node: {
            node_type: 'magazine-issues'
            data: ApiMagazineIssueNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
