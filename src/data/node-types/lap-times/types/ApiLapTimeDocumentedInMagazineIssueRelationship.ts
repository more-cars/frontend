import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiMagazineIssueNode} from "../../magazine-issues/types/ApiMagazineIssueNode"

export type ApiLapTimeDocumentedInMagazineIssueRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.MAGAZINE_ISSUE
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.LAP_TIME_DOCUMENTED_IN_MAGAZINE_ISSUE
            partner_node: {
                node_type: ApiNodeType.MAGAZINE_ISSUE
                data: ApiMagazineIssueNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
