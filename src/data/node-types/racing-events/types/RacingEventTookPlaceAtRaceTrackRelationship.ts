import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RaceTrackNode} from "../../race-tracks/types/RaceTrackNode"

export type RacingEventTookPlaceAtRaceTrackRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_TOOK_PLACE_AT_RACE_TRACK
    source_node: RacingEventNode
    source_node_type: DataNodeType.RACING_EVENT
    partner_node: RaceTrackNode
    partner_node_type: DataNodeType.RACE_TRACK
    created_at: string
    updated_at: string
}
