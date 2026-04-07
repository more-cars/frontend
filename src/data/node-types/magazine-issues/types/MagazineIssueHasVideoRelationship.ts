import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type MagazineIssueHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_HAS_VIDEO
    source_node: MagazineIssueNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
