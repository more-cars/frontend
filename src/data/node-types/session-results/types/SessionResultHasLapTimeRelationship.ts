import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {SessionResultNode} from "./SessionResultNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {LapTimeNode} from "../../lap-times/types/LapTimeNode"

export type SessionResultHasLapTimeRelationship = {
    id: number
    name: DataRelationshipType.SESSION_RESULT_HAS_LAP_TIME
    source_node: SessionResultNode
    source_node_type: DataNodeType.SESSION_RESULT
    partner_node: LapTimeNode
    partner_node_type: DataNodeType.LAP_TIME
    created_at: string
    updated_at: string
}
