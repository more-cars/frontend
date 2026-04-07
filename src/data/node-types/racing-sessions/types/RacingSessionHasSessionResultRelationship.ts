import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSessionNode} from "./RacingSessionNode"
import type {SessionResultNode} from "../../session-results/types/SessionResultNode"

export type RacingSessionHasSessionResultRelationship = {
    id: number
    name: DataRelationshipType.RACING_SESSION_HAS_SESSION_RESULT
    source_node: RacingSessionNode
    partner_node: SessionResultNode
    created_at: string
    updated_at: string
}
