import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {SessionResultNode} from "../../session-results/types/SessionResultNode"

export type LapTimeBelongsToSessionResultRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_BELONGS_TO_SESSION_RESULT
    source_node: LapTimeNode
    partner_node: SessionResultNode
    created_at: string
    updated_at: string
}
