import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiVideoNode} from "../../videos/types/ApiVideoNode"

export type ApiMagazineIssueHasVideoRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.MAGAZINE_ISSUE_HAS_VIDEO
        partner_node: {
            node_type: ApiNodeType.VIDEO
            data: ApiVideoNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
