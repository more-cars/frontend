import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type MagazineIssueHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_HAS_VIDEO
    source_node: MagazineIssueNode
    source_node_type: DataNodeType.MAGAZINE_ISSUE
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
