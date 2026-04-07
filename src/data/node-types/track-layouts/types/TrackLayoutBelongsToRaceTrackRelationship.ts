import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {RaceTrackNode} from "../../race-tracks/types/RaceTrackNode"

export type TrackLayoutBelongsToRaceTrackRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_BELONGS_TO_RACE_TRACK
    source_node: TrackLayoutNode
    partner_node: RaceTrackNode
    created_at: string
    updated_at: string
}
