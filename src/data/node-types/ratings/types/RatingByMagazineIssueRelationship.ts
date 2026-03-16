import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RatingNode} from "./RatingNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type RatingByMagazineIssueRelationship = {
    id: number
    name: DataRelationshipType.RATING_BY_MAGAZINE_ISSUE
    source_node: RatingNode
    source_node_type: DataNodeType.RATING
    partner_node: MagazineIssueNode
    partner_node_type: DataNodeType.MAGAZINE_ISSUE
    created_at: string
    updated_at: string
}
