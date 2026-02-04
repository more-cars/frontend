import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSessionNode} from "./RacingSessionNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {SessionResultNode} from "../../session-results/types/SessionResultNode"

export type RacingSessionHasSessionResultRelationship = {
    id: number
    name: DataRelationshipType.RACING_SESSION_HAS_SESSION_RESULT
    source_node: RacingSessionNode
    source_node_type: DataNodeType.RACING_SESSION
    partner_node: SessionResultNode
    partner_node_type: DataNodeType.SESSION_RESULT
    created_at: string
    updated_at: string
}
