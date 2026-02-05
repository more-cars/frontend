import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {TrackLayoutNode} from "../../track-layouts/types/TrackLayoutNode"

export type LapTimeAchievedOnTrackLayoutRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_ACHIEVED_ON_TRACK_LAYOUT
    source_node: LapTimeNode
    source_node_type: DataNodeType.LAP_TIME
    partner_node: TrackLayoutNode
    partner_node_type: DataNodeType.TRACK_LAYOUT
    created_at: string
    updated_at: string
}
