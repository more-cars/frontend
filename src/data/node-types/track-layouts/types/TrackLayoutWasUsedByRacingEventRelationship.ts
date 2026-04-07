import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {RacingEventNode} from "../../racing-events/types/RacingEventNode"

export type TrackLayoutWasUsedByRacingEventRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_WAS_USED_BY_RACING_EVENT
    source_node: TrackLayoutNode
    partner_node: RacingEventNode
    created_at: string
    updated_at: string
}
