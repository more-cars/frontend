import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRaceTrackNode} from "../../race-tracks/types/ApiRaceTrackNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingEventTookPlaceAtRaceTrackRelationship = {
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
