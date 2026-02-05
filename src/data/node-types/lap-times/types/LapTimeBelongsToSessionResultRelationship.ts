import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {SessionResultNode} from "../../session-results/types/SessionResultNode"

export type LapTimeBelongsToSessionResultRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_BELONGS_TO_SESSION_RESULT
    source_node: LapTimeNode
    source_node_type: DataNodeType.LAP_TIME
    partner_node: SessionResultNode
    partner_node_type: DataNodeType.SESSION_RESULT
    created_at: string
    updated_at: string
}
