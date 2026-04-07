import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSeriesNode} from "./RacingSeriesNode"
import type {RacingEventNode} from "../../racing-events/types/RacingEventNode"

export type RacingSeriesHasRacingEventRelationship = {
    id: number
    name: DataRelationshipType.RACING_SERIES_HAS_RACING_EVENT
    source_node: RacingSeriesNode
    partner_node: RacingEventNode
    created_at: string
    updated_at: string
}
