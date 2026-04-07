import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RaceTrackNode} from "./RaceTrackNode"
import type {TrackLayoutNode} from "../../track-layouts/types/TrackLayoutNode"

export type RaceTrackHasLayoutRelationship = {
    id: number
    name: DataRelationshipType.RACE_TRACK_HAS_LAYOUT
    source_node: RaceTrackNode
    partner_node: TrackLayoutNode
    created_at: string
    updated_at: string
}
