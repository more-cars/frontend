import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingSeriesNode} from "../../racing-series/types/RacingSeriesNode"

export type RacingEventBelongsToRacingSeriesRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_BELONGS_TO_RACING_SERIES
    source_node: RacingEventNode
    source_node_type: DataNodeType.RACING_EVENT
    partner_node: RacingSeriesNode
    partner_node_type: DataNodeType.RACING_SERIES
    created_at: string
    updated_at: string
}
