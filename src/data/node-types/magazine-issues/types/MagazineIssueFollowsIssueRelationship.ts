import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"

export type MagazineIssueFollowsIssueRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_FOLLOWS_ISSUE
    source_node: MagazineIssueNode
    partner_node: MagazineIssueNode
    created_at: string
    updated_at: string
}
