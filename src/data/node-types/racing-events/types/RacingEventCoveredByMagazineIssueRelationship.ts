import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type RacingEventCoveredByMagazineIssueRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_COVERED_BY_MAGAZINE_ISSUE
    source_node: RacingEventNode
    source_node_type: DataNodeType.RACING_EVENT
    partner_node: MagazineIssueNode
    partner_node_type: DataNodeType.MAGAZINE_ISSUE
    created_at: string
    updated_at: string
}
