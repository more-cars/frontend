import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {TrackLayoutNode} from "../../track-layouts/types/TrackLayoutNode"

export type RacingEventUsedTheTrackLayoutRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_USED_THE_TRACK_LAYOUT
    source_node: RacingEventNode
    source_node_type: DataNodeType.RACING_EVENT
    partner_node: TrackLayoutNode
    partner_node_type: DataNodeType.TRACK_LAYOUT
    created_at: string
    updated_at: string
}
