import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineNode} from "./MagazineNode"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type MagazineHasIssueRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_HAS_ISSUE
    source_node: MagazineNode
    partner_node: MagazineIssueNode
    created_at: string
    updated_at: string
}
