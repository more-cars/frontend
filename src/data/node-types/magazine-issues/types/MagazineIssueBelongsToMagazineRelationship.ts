import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {MagazineNode} from "../../magazines/types/MagazineNode"

export type MagazineIssueBelongsToMagazineRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_BELONGS_TO_MAGAZINE
    source_node: MagazineIssueNode
    source_node_type: DataNodeType.MAGAZINE_ISSUE
    partner_node: MagazineNode
    partner_node_type: DataNodeType.MAGAZINE
    created_at: string
    updated_at: string
}
