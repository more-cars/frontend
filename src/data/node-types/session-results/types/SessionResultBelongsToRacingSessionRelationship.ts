import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {SessionResultNode} from "./SessionResultNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingSessionNode} from "../../racing-sessions/types/RacingSessionNode"

export type SessionResultBelongsToRacingSessionRelationship = {
    id: number
    name: DataRelationshipType.SESSION_RESULT_BELONGS_TO_RACING_SESSION
    source_node: SessionResultNode
    source_node_type: DataNodeType.SESSION_RESULT
    partner_node: RacingSessionNode
    partner_node_type: DataNodeType.RACING_SESSION
    created_at: string
    updated_at: string
}
