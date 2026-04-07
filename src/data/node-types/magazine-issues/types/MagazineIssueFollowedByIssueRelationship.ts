import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"

export type MagazineIssueFollowedByIssueRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_FOLLOWED_BY_ISSUE
    source_node: MagazineIssueNode
    partner_node: MagazineIssueNode
    created_at: string
    updated_at: string
}
