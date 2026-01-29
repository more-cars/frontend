import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RaceTrackNode} from "../../race-tracks/types/RaceTrackNode"

export type TrackLayoutBelongsToRaceTrackRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_BELONGS_TO_RACE_TRACK
    source_node: TrackLayoutNode
    source_node_type: DataNodeType.TRACK_LAYOUT
    partner_node: RaceTrackNode
    partner_node_type: DataNodeType.RACE_TRACK
    created_at: string
    updated_at: string
}
