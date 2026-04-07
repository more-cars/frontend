import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RatingNode} from "./RatingNode"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type RatingByMagazineIssueRelationship = {
    id: number
    name: DataRelationshipType.RATING_BY_MAGAZINE_ISSUE
    source_node: RatingNode
    partner_node: MagazineIssueNode
    created_at: string
    updated_at: string
}
