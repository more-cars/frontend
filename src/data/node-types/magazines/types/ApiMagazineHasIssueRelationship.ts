import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiMagazineIssueNode} from "../../magazine-issues/types/ApiMagazineIssueNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiMagazineHasIssueRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.MAGAZINE_HAS_ISSUE
        partner_node: {
            node_type: ApiNodeType.MAGAZINE_ISSUE
            data: ApiMagazineIssueNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
