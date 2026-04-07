import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"

export type RacingEventFollowsEventRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_FOLLOWS_EVENT
    source_node: RacingEventNode
    partner_node: RacingEventNode
    created_at: string
    updated_at: string
}
