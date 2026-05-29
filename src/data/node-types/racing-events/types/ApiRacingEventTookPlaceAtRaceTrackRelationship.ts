import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRaceTrackNode} from "../../race-tracks/types/ApiRaceTrackNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingEventTookPlaceAtRaceTrackRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.RACING_EVENT
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.RACING_EVENT_TOOK_PLACE_AT_RACE_TRACK
            partner_node: {
                node_type: ApiNodeType.RACE_TRACK
                data: ApiRaceTrackNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
