import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingGameNode} from "../../racing-games/types/ApiRacingGameNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiTrackLayoutIsFeaturedInRacingGameRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.TRACK_LAYOUT_IS_FEATURED_IN_RACING_GAME
        partner_node: {
            node_type: ApiNodeType.RACING_GAME
            data: ApiRacingGameNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
