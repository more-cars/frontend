import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {SessionResultNode} from "./SessionResultNode"
import type {RacingSessionNode} from "../../racing-sessions/types/RacingSessionNode"

export type SessionResultBelongsToRacingSessionRelationship = {
    id: number
    name: DataRelationshipType.SESSION_RESULT_BELONGS_TO_RACING_SESSION
    source_node: SessionResultNode
    partner_node: RacingSessionNode
    created_at: string
    updated_at: string
}
