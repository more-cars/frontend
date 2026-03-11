import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiTrackLayoutNode} from "../../track-layouts/types/ApiTrackLayoutNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingGameFeaturesTrackLayoutRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.RACING_GAME_FEATURES_TRACK_LAYOUT
        partner_node: {
            node_type: ApiNodeType.TRACK_LAYOUT
            data: ApiTrackLayoutNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
