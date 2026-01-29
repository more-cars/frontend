import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RaceTrackNode} from "./RaceTrackNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {TrackLayoutNode} from "../../track-layouts/types/TrackLayoutNode"

export type RaceTrackHasLayoutRelationship = {
    id: number
    name: DataRelationshipType.RACE_TRACK_HAS_LAYOUT
    source_node: RaceTrackNode
    source_node_type: DataNodeType.RACE_TRACK
    partner_node: TrackLayoutNode
    partner_node_type: DataNodeType.TRACK_LAYOUT
    created_at: string
    updated_at: string
}
