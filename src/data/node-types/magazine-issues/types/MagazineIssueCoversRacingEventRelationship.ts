import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingEventNode} from "../../racing-events/types/RacingEventNode"

export type MagazineIssueCoversRacingEventRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_COVERS_RACING_EVENT
    source_node: MagazineIssueNode
    source_node_type: DataNodeType.MAGAZINE_ISSUE
    partner_node: RacingEventNode
    partner_node_type: DataNodeType.RACING_EVENT
    created_at: string
    updated_at: string
}
