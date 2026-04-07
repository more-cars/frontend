import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {SessionResultNode} from "./SessionResultNode"
import type {LapTimeNode} from "../../lap-times/types/LapTimeNode"

export type SessionResultHasLapTimeRelationship = {
    id: number
    name: DataRelationshipType.SESSION_RESULT_HAS_LAP_TIME
    source_node: SessionResultNode
    partner_node: LapTimeNode
    created_at: string
    updated_at: string
}
