import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingSessionNode} from "../../racing-sessions/types/RacingSessionNode"

export type RacingEventHasRacingSessionRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_HAS_RACING_SESSION
    source_node: RacingEventNode
    source_node_type: DataNodeType.RACING_EVENT
    partner_node: RacingSessionNode
    partner_node_type: DataNodeType.RACING_SESSION
    created_at: string
    updated_at: string
}
