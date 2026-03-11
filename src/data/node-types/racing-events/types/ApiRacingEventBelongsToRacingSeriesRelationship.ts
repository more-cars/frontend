import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingSeriesNode} from "../../racing-series/types/ApiRacingSeriesNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingEventBelongsToRacingSeriesRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.RACING_EVENT_BELONGS_TO_RACING_SERIES
        partner_node: {
            node_type: ApiNodeType.RACING_SERIES
            data: ApiRacingSeriesNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
