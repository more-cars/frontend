import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSessionNode} from "./RacingSessionNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingEventNode} from "../../racing-events/types/RacingEventNode"

export type RacingSessionBelongsToRacingEventRelationship = {
    id: number
    name: DataRelationshipType.RACING_SESSION_BELONGS_TO_RACING_EVENT
    source_node: RacingSessionNode
    source_node_type: DataNodeType.RACING_SESSION
    partner_node: RacingEventNode
    partner_node_type: DataNodeType.RACING_EVENT
    created_at: string
    updated_at: string
}
