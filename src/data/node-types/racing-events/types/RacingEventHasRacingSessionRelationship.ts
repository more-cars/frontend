import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {RacingSessionNode} from "../../racing-sessions/types/RacingSessionNode"

export type RacingEventHasRacingSessionRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_HAS_RACING_SESSION
    source_node: RacingEventNode
    partner_node: RacingSessionNode
    created_at: string
    updated_at: string
}
