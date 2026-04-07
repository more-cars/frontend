import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {RacingEventNode} from "../../racing-events/types/RacingEventNode"

export type MagazineIssueCoversRacingEventRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_COVERS_RACING_EVENT
    source_node: MagazineIssueNode
    partner_node: RacingEventNode
    created_at: string
    updated_at: string
}
