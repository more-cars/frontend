import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {MagazineNode} from "../../magazines/types/MagazineNode"

export type MagazineIssueBelongsToMagazineRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_BELONGS_TO_MAGAZINE
    source_node: MagazineIssueNode
    partner_node: MagazineNode
    created_at: string
    updated_at: string
}
