import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type RacingEventCoveredByMagazineIssueRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_COVERED_BY_MAGAZINE_ISSUE
    source_node: RacingEventNode
    partner_node: MagazineIssueNode
    created_at: string
    updated_at: string
}
