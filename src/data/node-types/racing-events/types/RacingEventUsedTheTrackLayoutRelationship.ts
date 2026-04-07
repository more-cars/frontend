import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {TrackLayoutNode} from "../../track-layouts/types/TrackLayoutNode"

export type RacingEventUsedTheTrackLayoutRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_USED_THE_TRACK_LAYOUT
    source_node: RacingEventNode
    partner_node: TrackLayoutNode
    created_at: string
    updated_at: string
}
