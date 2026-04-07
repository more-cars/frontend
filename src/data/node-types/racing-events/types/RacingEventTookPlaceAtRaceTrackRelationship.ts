import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {RaceTrackNode} from "../../race-tracks/types/RaceTrackNode"

export type RacingEventTookPlaceAtRaceTrackRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_TOOK_PLACE_AT_RACE_TRACK
    source_node: RacingEventNode
    partner_node: RaceTrackNode
    created_at: string
    updated_at: string
}
