import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingEventNode} from "../../racing-events/types/ApiRacingEventNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingSeriesHasRacingEventRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.RACING_SERIES
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.RACING_SERIES_HAS_RACING_EVENT
            partner_node: {
                node_type: ApiNodeType.RACING_EVENT
                data: ApiRacingEventNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
