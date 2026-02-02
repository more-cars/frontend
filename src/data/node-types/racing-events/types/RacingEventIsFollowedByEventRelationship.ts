import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {DataNodeType} from "../../../types/DataNodeType"

export type RacingEventIsFollowedByEventRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_IS_FOLLOWED_BY_EVENT
    source_node: RacingEventNode
    source_node_type: DataNodeType.RACING_EVENT
    partner_node: RacingEventNode
    partner_node_type: DataNodeType.RACING_EVENT
    created_at: string
    updated_at: string
}
