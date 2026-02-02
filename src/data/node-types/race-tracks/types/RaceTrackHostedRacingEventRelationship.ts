import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RaceTrackNode} from "./RaceTrackNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingEventNode} from "../../racing-events/types/RacingEventNode"

export type RaceTrackHostedRacingEventRelationship = {
    id: number
    name: DataRelationshipType.RACE_TRACK_HOSTED_RACING_EVENT
    source_node: RaceTrackNode
    source_node_type: DataNodeType.RACE_TRACK
    partner_node: RacingEventNode
    partner_node_type: DataNodeType.RACING_EVENT
    created_at: string
    updated_at: string
}
