import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSeriesNode} from "./RacingSeriesNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingEventNode} from "../../racing-events/types/RacingEventNode"

export type RacingSeriesHasRacingEventRelationship = {
    id: number
    name: DataRelationshipType.RACING_SERIES_HAS_RACING_EVENT
    source_node: RacingSeriesNode
    source_node_type: DataNodeType.RACING_SERIES
    partner_node: RacingEventNode
    partner_node_type: DataNodeType.RACING_EVENT
    created_at: string
    updated_at: string
}
