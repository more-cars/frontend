import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineNode} from "./MagazineNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type MagazineHasIssueRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_HAS_ISSUE
    source_node: MagazineNode
    source_node_type: DataNodeType.MAGAZINE
    partner_node: MagazineIssueNode
    partner_node_type: DataNodeType.MAGAZINE_ISSUE
    created_at: string
    updated_at: string
}
