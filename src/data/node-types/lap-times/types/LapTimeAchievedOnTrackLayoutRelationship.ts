import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {TrackLayoutNode} from "../../track-layouts/types/TrackLayoutNode"

export type LapTimeAchievedOnTrackLayoutRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_ACHIEVED_ON_TRACK_LAYOUT
    source_node: LapTimeNode
    partner_node: TrackLayoutNode
    created_at: string
    updated_at: string
}
