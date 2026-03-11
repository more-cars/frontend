import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRaceTrackNode} from "../../race-tracks/types/ApiRaceTrackNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiTrackLayoutBelongsToRaceTrackRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.TRACK_LAYOUT_BELONGS_TO_RACE_TRACK
        partner_node: {
            node_type: ApiNodeType.RACE_TRACK
            data: ApiRaceTrackNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
