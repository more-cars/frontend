import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {RacingSeriesNode} from "../../racing-series/types/RacingSeriesNode"

export type RacingEventBelongsToRacingSeriesRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_BELONGS_TO_RACING_SERIES
    source_node: RacingEventNode
    partner_node: RacingSeriesNode
    created_at: string
    updated_at: string
}
