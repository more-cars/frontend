import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {DataNodeType} from "../../../types/DataNodeType"

export type MagazineIssueFollowsIssueRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_FOLLOWS_ISSUE
    source_node: MagazineIssueNode
    source_node_type: DataNodeType.MAGAZINE_ISSUE
    partner_node: MagazineIssueNode
    partner_node_type: DataNodeType.MAGAZINE_ISSUE
    created_at: string
    updated_at: string
}
