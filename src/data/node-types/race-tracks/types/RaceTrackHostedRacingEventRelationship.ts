import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RaceTrackNode} from "./RaceTrackNode"
import type {RacingEventNode} from "../../racing-events/types/RacingEventNode"

export type RaceTrackHostedRacingEventRelationship = {
    id: number
    name: DataRelationshipType.RACE_TRACK_HOSTED_RACING_EVENT
    source_node: RaceTrackNode
    partner_node: RacingEventNode
    created_at: string
    updated_at: string
}
