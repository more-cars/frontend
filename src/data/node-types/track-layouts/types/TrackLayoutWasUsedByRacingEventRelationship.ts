import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingEventNode} from "../../racing-events/types/RacingEventNode"

export type TrackLayoutWasUsedByRacingEventRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_WAS_USED_BY_RACING_EVENT
    source_node: TrackLayoutNode
    source_node_type: DataNodeType.TRACK_LAYOUT
    partner_node: RacingEventNode
    partner_node_type: DataNodeType.RACING_EVENT
    created_at: string
    updated_at: string
}
