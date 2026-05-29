import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRaceTrackNode} from "../../race-tracks/types/ApiRaceTrackNode"

export type ApiTrackLayoutBelongsToRaceTrackRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.TRACK_LAYOUT
        id: number
        attributes: Record<string, string | number | boolean | null>
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
}
