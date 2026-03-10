import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingSessionNode} from "../../racing-sessions/types/ApiRacingSessionNode"

export type ApiRacingEventHasRacingSessionRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-racing-session'
        partner_node: {
            node_type: ApiNodeType.RACING_SESSION
            data: ApiRacingSessionNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
